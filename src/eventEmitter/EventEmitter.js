class myEventEmitter {
  constructor() {
    // eventMap 用来存储事件和监听函数之间的关系

    this.eventMap = {}
  }

  // type 这里就代表事件的名称

  on(type, handler) {
    // handler 必须是一个函数，如果不是直接报错

    if (!(handler instanceof Function)) {
      throw new Error('哥 你错了 请传一个函数')
    }

    // 判断 type 事件对应的队列是否存在

    if (!this.eventMap[type]) {
      // 若不存在，新建该队列

      this.eventMap[type] = []
    }

    // 若存在，直接往队列里推入 handler

    this.eventMap[type].push(handler)
  }

  // 别忘了我们前面说过触发时是可以携带数据的，params 就是数据的载体

  emit(type, params) {
    // 假设该事件是有订阅的（对应的事件队列存在）

    if (this.eventMap[type]) {
      // 将事件队列里的 handler 依次执行出队

      this.eventMap[type].forEach((handler) => {
        // 注意别忘了读取 params

        handler(params)
      })
    }
  }

  off(type, handler) {
    if (this.eventMap[type]) {
      this.eventMap[type].splice(this.eventMap[type].indexOf(handler) >>> 0, 1)
    }
  }
}

const myEvent = new myEventEmitter()

export default myEvent
