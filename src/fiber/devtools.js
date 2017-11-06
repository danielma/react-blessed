/* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */

const defineProperty = Object.defineProperty;
defineProperty(global, 'WebSocket', {
  value: require('ws')
});
defineProperty(global, 'window', {
  value: global
});
const {connectToDevTools} = require('react-devtools-core');

connectToDevTools({
  isAppActive() {
    // Don't steal the DevTools from currently active app.
    console.log('isAppActive', true);
    return true;
  },
  host: 'localhost',
  port: 8097,
  resolveRNStyle: null, // TODO maybe: require('flattenStyle')
});
