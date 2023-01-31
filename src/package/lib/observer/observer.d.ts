class Observer {
  _handlers;
  /* 注册事件 */
  on: (name, fn) => void;

  /* 删除事件 */
  off: (name, fn) => void;

  /* 清空所有事件 */
  unAll: () => {};

  /* 只绑定一次事件，重复事件不会绑定 */
  solo: (name, fn) => void;

  /* 只触发一次的事件监听 */
  once: (name, fn) => void;

  /* 触发事件 */
  emit: (name, ...args) => void;

  /* 异步的处理注册的事件，如果出现错误，直接退出*/
  applyPluginsAsyncSeries: (name) => void;

  /* 异步的处理注册的事件，后注册的事件拿到前者处理的值 */
  applyPluginsAsyncWaterfall: (name, init, callback) => void;
}
export = Observer;
