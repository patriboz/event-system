# event-system
A basic system for custom events.



## Usage



Add event listener:

```javascript
event.on('someEvent', eventHandler);
```

Remove event listener:

```javascript
event.off('someEvent', eventHandler);
```

Add event listener and remove it after being used once:

```javascript
event.once('someEvent', eventHandler);
```

Emit an event:

*Note: [message] is optional.*

```javascript
event.emit('someEvent', [message]);
```

Get event listeners for an event string:

```javascript
event.getListeners(event);
```

