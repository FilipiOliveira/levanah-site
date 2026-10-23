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
  properties = new Map();
  style = { setProperty: (name, value) => this.properties.set(name, value) };
  children = [];
  contains(element) { return element === this || this.children.includes(element); }
  setAttribute(name, value) { this.attributes.set(name, value); }
  removeAttribute(name) { this.attributes.delete(name); if (name === 'open') this.open = false; }
  toggleAttribute(name, enabled) { if (enabled) this.setAttribute(name, ''); else this.removeAttribute(name); }
  closest(selector) { return selector === 'a' && this.hash ? this : null; }
  getBoundingClientRect() { return { top: this.top, height: 180, bottom: this.top + 180 }; }
  animate(keyframes, options) {
    const animation = { canceled: false, cancel() { this.canceled = true; }, finished: new Promise(() => {}) };
    this.animation = animation;
    this.keyframes = keyframes;
    this.animationOptions = options;
    return animation;
  }
}

function setup({ reduced = false, observerSupported = true, hash = '', scrollY = 0 } = {}) {
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
  reveal.top = 200;
  const secondReveal = new Element();
  const steps = Array.from({ length: 6 }, (_, index) => {
    const step = new Element();
    step.top = 200 + index * 180;
    return step;
  });
  const document = new Events();
  document.activeElement = null;
  document.documentElement = { style: { setProperty() {} } };
  document.querySelector = selector => selector === '[data-header]' ? header : menu;
  document.querySelectorAll = selector => selector === '[data-section-link]' ? links : selector === '[data-reveal]' ? [reveal, secondReveal] : selector === '[data-process-step]' ? steps : sections;
  const preference = new Events();
  preference.matches = reduced;
  const window = new Events();
  Object.assign(window, { innerHeight: 800, scrollY, location: { hash }, matchMedia: () => preference });
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
  return { header, menu, summary, sections, links, reveal, secondReveal, steps, document, window, preference, flush,
    enter: () => callback([{ isIntersecting: true, target: reveal }]),
    enterBoth: () => callback([reveal, secondReveal].map(target => ({ isIntersecting: true, target }))),
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

test('reduced motion skips entry animations', () => {
  for (const options of [{ reduced: true }]) {
    const state = setup(options);
    state.enter();
    assert.equal(state.reveal.animation, undefined);
    assert.equal(state.reveal.attributes.has('data-in-view'), true);
  }
});

test('an existing anchor does not disable reveals elsewhere and entries are staggered', () => {
  const state = setup({ hash: '#sobre' });
  state.enterBoth();
  assert.equal(state.reveal.animationOptions.delay, 0);
  assert.equal(state.secondReveal.animationOptions.delay, 70);
  assert.equal(state.reveal.keyframes[0].opacity, .2);
});

test('restored visible content and anchor target remain still without disabling future reveals', () => {
  const restored = setup({ scrollY: 600 });
  restored.enterBoth();
  assert.equal(restored.reveal.animation, undefined);
  assert.ok(restored.secondReveal.animation);
  const anchored = setup({ hash: '#sobre' });
  anchored.reveal.closest = selector => selector === '[id]' ? { id: 'sobre' } : null;
  anchored.enter();
  assert.equal(anchored.reveal.animation, undefined);
});

test('reading progress follows scroll in both directions and reduced motion removes fill', () => {
  const state = setup();
  assert.equal(state.steps.filter(step => step.attributes.has('data-reading')).length, 1);
  assert.equal(state.steps[1].attributes.has('data-reading'), true);
  assert.ok(Number(state.steps[1].properties.get('--step-progress')) > 0);
  state.steps.forEach(step => { step.top += 500; });
  state.window.dispatch('scroll');
  state.flush();
  assert.equal(state.steps.some(step => step.attributes.has('data-reading')), false);
  state.preference.matches = true;
  state.preference.dispatch('change');
  state.flush();
  assert.ok(state.steps.every(step => step.properties.get('--step-progress') === '0'));
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
