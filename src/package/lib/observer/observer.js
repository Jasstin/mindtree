function copyProperties(from, to) {
  for (var key in from) to[key] = from[key];
  return to;
}

/*
 * 简单的发布-订阅模式
 */
export default class Observer {
  constructor() {
    this._handlers = {};
  }

  /* 注册事件 */
  on(name, fn) {
    if (typeof fn !== 'function') return;
    if (!this._handlers[name]) {
      this._handlers[name] = [fn];
    } else {
      this._handlers[name].push(fn);
    }
  }

  /* 删除事件 */
  off(name, fn) {
    const handlers = this._handlers[name];
    if (handlers) {
      if (fn) {
        for (let i = handlers.length - 1; i >= 0; i--) {
          if (handlers[i] === fn) {
            handlers.splice(i, 1);
          }
        }
      } else {
        handlers.splice(0, handlers.length);
      }
    }
  }

  /* 清空所有事件 */
  unAll() {
    this._handlers = {};
  }

  /* 只绑定一次事件，重复事件不会绑定 */
  solo(name, fn) {
    let fnArr = this._handlers[name];
    if (
      fnArr &&
      fnArr.length &&
      fnArr.some((f) => fn.toString() === f.toString())
    ) {
      return false;
    }
    this.on(name, fn);
  }

  /* 只触发一次的事件监听 */
  once(name, fn) {
    const handler = (...args) => {
      fn.apply(this, args);
      setTimeout(() => {
        this.off(name, handler);
      }, 0);
    };
    this.on(name, handler);
  }

  /* 触发事件 */
  emit(name, ...args) {
    const handlers = this._handlers[name];
    handlers && handlers.forEach((fn) => fn(...args));
  }

  /* 异步的处理注册的事件，如果出现错误，直接退出*/
  applyPluginsAsyncSeries(name) {
    var args = Array.prototype.slice.call(arguments, 1);
    var callback = args.pop();
    var plugins = this._handlers[name];
    if (!plugins || plugins.length === 0) return callback();
    var i = 0;
    var _this = this;
    args.push(
      copyProperties(callback, function next(err) {
        if (err) return callback(err);
        i++;
        if (i >= plugins.length) {
          return callback();
        }
        plugins[i].apply(_this, args);
      })
    );
    plugins[0].apply(this, args);
  }

  /* 异步的处理注册的事件，后注册的事件拿到前者处理的值 */
  applyPluginsAsyncWaterfall(name, init, callback) {
    if (!this._handlers[name] || this._handlers[name].length === 0)
      return callback(null, init);
    var plugins = this._handlers[name];
    var i = 0;
    var _this = this;
    var next = copyProperties(callback, function (err, value) {
      if (err) return callback(err, value);
      i++;
      if (i >= plugins.length) {
        return callback(null, value);
      }
      plugins[i].call(_this, value, next);
    });
    plugins[0].call(this, init, next);
  }
}
