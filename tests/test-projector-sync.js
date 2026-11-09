const fs = require('fs');
const vm = require('vm');
const assert = require('assert');

let broadcastMessages = [];
let projectorBcInstance = null;
class MockBroadcastChannel {
  constructor(name) {
    this.name = name;
    this.onmessage = null;
    if (name === 'davnor_projector_sync') {
      projectorBcInstance = this;
    }
  }
  postMessage(msg) {
    broadcastMessages.push(msg);
  }
}

const mockDoc = {
  addEventListener: () => {},
  getElementById: (id) => ({
    id,
    classList: {
      add: () => {},
      remove: () => {},
      contains: () => false,
      toggle: () => {}
    },
    style: {},
    innerHTML: '',
    addEventListener: () => {}
  }),
  querySelectorAll: () => [],
  documentElement: {
    requestFullscreen: () => {},
    classList: { add: () => {}, remove: () => {} }
  }
};

const sandbox = {
  window: {
    location: { search: '?mode=projector', pathname: '/01-group-awardees/index.html' },
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

const presentationCode = fs.readFileSync('shared/js/presentation.js', 'utf8');
vm.createContext(sandbox);
vm.runInContext('window.SLIDES_DATA = [{ id: 1, title: "Test 1" }, { id: 2, title: "Test 2" }, { id: 3, title: "Test 3" }];', sandbox);
vm.runInContext(presentationCode, sandbox);

const engine = sandbox.window.PresentationEngine;
assert(engine.isProjectorMode === true, 'Projector mode should be detected from ?mode=projector');

// Test remote GOTO_SLIDE action
assert(projectorBcInstance, 'Projector broadcast channel must be initialized');
assert.strictEqual(engine.getCurrentIndex(), 0, 'Initial slide index should be 0');

projectorBcInstance.onmessage({
  data: {
    action: 'GOTO_SLIDE',
    deckKey: '01-group',
    slideIndex: 2
  }
});
assert.strictEqual(engine.getCurrentIndex(), 2, 'Slide index should update to 2 via GOTO_SLIDE message');

// Test remote NEXT_SLIDE and PREV_SLIDE
projectorBcInstance.onmessage({
  data: {
    action: 'PREV_SLIDE',
    deckKey: '01-group'
  }
});
assert.strictEqual(engine.getCurrentIndex(), 1, 'Slide index should decrement to 1 via PREV_SLIDE message');

console.log('PASS: test-projector-sync');
