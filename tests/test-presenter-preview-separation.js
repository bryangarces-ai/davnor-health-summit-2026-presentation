const fs = require('fs');
const vm = require('vm');
const assert = require('assert');

// 1. Test that when isIframe is true, BroadcastChannel sync listener is bypassed
class MockBroadcastChannel {
  constructor(name) {
    this.name = name;
    this.onmessage = null;
    MockBroadcastChannel.instances.push(this);
  }
  postMessage(msg) {}
}
MockBroadcastChannel.instances = [];

const mockDoc = {
  addEventListener: () => {},
  getElementById: () => ({ style: {}, classList: { add: () => {}, remove: () => {} }, innerHTML: '', addEventListener: () => {} }),
  querySelectorAll: () => [],
  documentElement: { classList: { add: () => {}, remove: () => {} } }
};

// Simulate IFRAME environment: window.self !== window.top
const sandboxIframeNext = {
  window: {
    location: { search: '?mode=preview', hash: '#3', pathname: '/01-group-awardees/index.html' },
    BroadcastChannel: MockBroadcastChannel,
    localStorage: { getItem: () => null, setItem: () => {} },
    addEventListener: () => {},
    document: mockDoc,
    setTimeout: (fn) => setTimeout(fn, 0),
    clearTimeout: () => {},
    setInterval: () => 1,
    clearInterval: () => {}
  },
  document: mockDoc,
  BroadcastChannel: MockBroadcastChannel,
  setTimeout: (fn) => setTimeout(fn, 0),
  clearTimeout: () => {},
  setInterval: () => 1,
  clearInterval: () => {}
};
sandboxIframeNext.window.self = sandboxIframeNext.window;
sandboxIframeNext.window.top = { isParent: true }; // different object -> isIframe = true

const presentationCode = fs.readFileSync('shared/js/presentation.js', 'utf8');
vm.createContext(sandboxIframeNext);
vm.runInContext('window.SLIDES_DATA = [{ id: 1, title: "S1" }, { id: 2, title: "S2" }, { id: 3, title: "S3" }, { id: 4, title: "S4" }];', sandboxIframeNext);
vm.runInContext(presentationCode, sandboxIframeNext);

const nextEngine = sandboxIframeNext.window.PresentationEngine;
assert.strictEqual(nextEngine.getCurrentIndex(), 3, 'Next slide preview iframe should load slide #3 from hash');

// If a broadcast arrives on davnor_projector_sync for slide 0, iframe MUST NOT jump to slide 0!
const channels = MockBroadcastChannel.instances.filter(ch => ch.name === 'davnor_projector_sync');
assert.strictEqual(channels.length, 0, 'Preview iframe must NOT register a davnor_projector_sync channel');

console.log('PASS: test-presenter-preview-separation');
