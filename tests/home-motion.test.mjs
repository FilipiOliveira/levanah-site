import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { stripTypeScriptTypes } from 'node:module';
import { test } from 'node:test';
import { runInNewContext } from 'node:vm';

const source = readFileSync(new URL('../src/components/HomeMotion.astro', import.meta.url), 'utf8');
const script = stripTypeScriptTypes(source.match(/<script>([\s\S]*?)<\/script>/)[1]);

class Events {
  listeners = new Map();
  addEventListener(name, handler) { this.listeners.set(name, handler); }
  removeEventListener(name) { this.listeners.delete(name); }
  dispatch(name, event = {}) { this.listeners.get(name)?.(event); }
}
class Element extends Events {
  attributes = new Map();
  children = [];
  contains(element) { return element === this || this.children.includes(element); }
  setAttribute(name, value) { this.attributes.set(name, value); }
  removeAttribute(name) { this.attributes.delete(name); if (name === 'open') this.open = false; }
  toggleAttribute(name, enabled) { if (enabled) this.setAttribute(name, ''); else this.removeAttribute(name); }
  closest(selector) { return selector === 'a' && this.hash ? this : null; }
  getBoundingClientRect() { return { top: this.top }; }
  animate() {
    const animation = { canceled: false, cancel() { this.canceled = true; }, finished: new Promise(() => {}) };
    this.animation = animation;
    return animation;
  }
}

function setup({ reduced = false, observerSupported = true, hash = '' } = {}) {
  const header = new Element();
  header.offsetHeight = 112;
  const menu = new Element();
  const summary = { focused: false, focus() { this.focused = true; } };
  menu.querySelector = () => summary;
  const sections = ['solucoes', 'como-trabalhamos', 'sobre', 'contato'].map((id, index) => {
    const element = new Element();
    element.id = id;
    element.top = 600 + index * 800;
    return element;
  });
  const links = sections.flatMap(section => [0, 1].map(() => {
    const link = new Element();
    link.hash = `#${section.id}`;
    return link;
  }));
  const reveal = new Element();
  const document = new Events();
  document.activeElement = null;
  document.documentElement = { style: { setProperty() {} } };
  document.querySelector = selector => selector === '[data-header]' ? header : menu;
  document.querySelectorAll = selector => selector === '[data-section-link]' ? links : selector === '[data-reveal]' ? [reveal] : sections;
  const preference = new Events();
  preference.matches = reduced;
  const window = new Events();
  Object.assign(window, { innerHeight: 800, scrollY: 0, location: { hash }, matchMedia: () => preference });
  let callback;
  let disconnected = false;
  const frames = [];
  class Observer {
    constructor(fn) { callback = fn; }
    observe() {}
    unobserve() {}
    disconnect() { disconnected = true; }
  }
  runInNewContext(script, {
    window, document, Element, HTMLElement: Element,
    IntersectionObserver: observerSupported ? Observer : undefined,
    requestAnimationFrame: fn => { frames.push(fn); return frames.length; },
    cancelAnimationFrame() {},
  });
  const flush = () => { while (frames.length) frames.shift()(); };
  flush();
  return { header, menu, summary, sections, links, reveal, document, window, preference, flush,
    enter: () => callback([{ isIntersecting: true, target: reveal }]),
    disconnected: () => disconnected };
}

test('navigation follows scroll and clears current state on return to the Hero', () => {
  const state = setup();
  state.sections[0].top = 100;
  state.window.scrollY = 500;
  state.window.dispatch('scroll');
  state.flush();
  assert.equal(state.header.attributes.has('data-scrolled'), true);
  assert.equal(state.links.filter(link => link.attributes.get('aria-current') === 'location').length, 2);
  state.sections[0].top = 600;
  state.window.scrollY = 0;
  state.window.dispatch('scroll');
  state.flush();
  assert.equal(state.links.some(link => link.attributes.has('aria-current')), false);
});

test('mobile menu closes after navigation and Escape restores focus', () => {
  const state = setup();
  state.menu.open = true;
  state.menu.dispatch('click', { target: state.links[0] });
  assert.equal(state.menu.open, false);
  state.menu.open = true;
  state.document.dispatch('keydown', { key: 'Escape' });
  assert.equal(state.menu.open, false);
  assert.equal(state.summary.focused, true);
});

test('missing observer keeps navigation working without applying animation styles', () => {
  const state = setup({ observerSupported: false });
  assert.equal(state.reveal.animation, undefined);
  assert.equal(state.reveal.attributes.size, 0);
  state.window.scrollY = 100;
  state.window.dispatch('scroll');
  state.flush();
  assert.equal(state.header.attributes.has('data-scrolled'), true);
});

test('reduced motion and direct anchors skip entry animations', () => {
  for (const options of [{ reduced: true }, { hash: '#sobre' }]) {
    const state = setup(options);
    state.enter();
    assert.equal(state.reveal.animation, undefined);
    assert.equal(state.reveal.attributes.has('data-in-view'), true);
  }
});

test('missing animation API or already focused content remains static on entry', () => {
  for (const condition of ['unsupported', 'focused']) {
    const state = setup();
    if (condition === 'unsupported') state.reveal.animate = undefined;
    else state.document.activeElement = state.reveal;
    state.enter();
    assert.equal(state.reveal.animation, undefined);
    assert.equal(state.reveal.attributes.has('data-in-view'), true);
  }
});

test('motion preference changing in use cancels an active animation', () => {
  const state = setup();
  state.enter();
  state.preference.matches = true;
  state.preference.dispatch('change');
  assert.equal(state.reveal.animation.canceled, true);
});

test('focused content and anchor navigation cancel entry animations', () => {
  for (const trigger of ['focus', 'hash']) {
    const state = setup();
    state.enter();
    if (trigger === 'focus') state.document.dispatch('focusin', { target: state.reveal });
    else state.window.dispatch('hashchange');
    assert.equal(state.reveal.animation.canceled, true);
  }
});

test('page teardown cleans observers and listeners but preserves back/forward cache behavior', () => {
  const state = setup();
  state.window.dispatch('pagehide', { persisted: true });
  assert.equal(state.disconnected(), false);
  assert.equal(state.window.listeners.has('scroll'), true);
  state.window.dispatch('pagehide', { persisted: false });
  assert.equal(state.disconnected(), true);
  assert.equal(state.window.listeners.has('scroll'), false);
  assert.equal(state.document.listeners.has('focusin'), false);
});
