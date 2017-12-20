'use strict';

var _require = require('lodash'),
    startCase = _require.startCase;

var blacklist = ['adopt', 'attach', 'destroy', 'reparent', 'parsed content', 'set content'];
var eventName = function eventName(event) {
  return 'on' + startCase(event).replace(/ /g, '');
};

var eventListener = function eventListener(node, event) {
  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  if (node._updating) return;

  var handler = node.props[eventName(event)];

  /*
  if (blacklist.indexOf(event) === -1) {
    if (handler) {
      console.log(event, ': ', startCase(event).replace(/ /g, ''));
    }
  }
  */

  if (typeof handler === 'function') {
    args[0] = node;

    handler.apply(undefined, args);
  }
};

module.exports = eventListener;