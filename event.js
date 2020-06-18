/**
 * @author patriboz / https://github.com/patriboz
 */

const event = (function() {

  let registry = {};

  function on(event, callback) {
    if(!registry[event]) registry[event] = [];
    registry[event].push(callback);
  }

  function once(event, callback) {
    if(!registry[event]) registry[event] = [];
    registry[event].push(function(message) {
      callback(message);
      off(event, callback);
    });
  }

  function off(event, callback) {
    if(registry[event]) {
      registry[event].splice(registry[event].indexOf(callback), 1);
      if(!registry[event].length) delete registry[event];
    }
  }

  function emit(event, message) {
    if(registry[event]) {
      registry[event].forEach(callback => {
        callback(message);
      });
    }
  }

  function getListeners(event) {
    return registry[event] ? registry[event] : null;
  }

  return {
    on: on,
    once: once,
    off: off,
    emit: emit,
    getListeners: getListeners
  }
})();

export { event };