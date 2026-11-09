const fs = require('fs');
const vm = require('vm');
const assert = require('assert');

class MockBroadcastChannel {
  constructor(name) {
    this.name = name;
    this.messages = [];
    MockBroadcastChannel.instances.push(this);
  }
  postMessage(msg) {
    this.messages.push(msg);
  }
}
MockBroadcastChannel.instances = [];

const mockElement = () => ({
  innerHTML: '',
  textContent: '',
  value: '',
  style: {},
  classList: {
    add: () => {},
    remove: () => {},
    toggle: () => {},
    contains: () => false
  },
  addEventListener: () => {},
  focus: () => {}
});

const mockDoc = {
  getElementById: (id) => mockElement(),
  querySelectorAll: () => [],
  addEventListener: () => {}
};

const sandbox = {
  window: {
    location: { pathname: '/01-group-awardees/presenter.html', search: '' },
    BroadcastChannel: MockBroadcastChannel,
    localStorage: { getItem: () => null, setItem: () => {} },
    setInterval: () => 1,
    clearInterval: () => {},
    document: mockDoc
  },
  document: mockDoc,
  BroadcastChannel: MockBroadcastChannel,
  setInterval: () => 1,
  clearInterval: () => {}
};

const code = fs.readFileSync('shared/js/presenter-console.js', 'utf8');
vm.createContext(sandbox);
vm.runInContext('window.SLIDES_DATA = [{ id: 1, title: "Tagum City Health Office Award" }, { id: 2, title: "Panabo Award" }, { id: 3, title: "Carmen RHU" }];', sandbox);
vm.runInContext(code, sandbox);

const app = sandbox.window.PresenterConsoleApp;
assert(app, 'PresenterConsoleApp must be exported');
const searchResults = app.searchSlides('Tagum');
assert.strictEqual(searchResults.length, 1);
assert.strictEqual(searchResults[0].slide.title, 'Tagum City Health Office Award');

const formatTimer = app.formatTime(75);
assert.strictEqual(formatTimer, '01:15', '75 seconds should format as 01:15');

console.log('PASS: test-presenter-console');
