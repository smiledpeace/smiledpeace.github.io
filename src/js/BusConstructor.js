class BusConstructor {
  constructor () {
    this.events = {}
  }

  $emit (name, ...params) {
    if (this.events[name]) {
      this.events[name].forEach(fun => {
        if (typeof fun === 'function') {
          fun(...params)
        }
      })
    }
  }

  $on (name, fun) {
    if (this.events[name]) {
      this.events[name].push(fun)
    } else {
      this.events[name] = [fun]
    }
  }

  $off (name, fun) {
    if (!this.events[name]) {
      return
    }
    if (fun) {
      this.events[name].forEach((f, i) => {
        if (f === fun) {
          this.events[name].splice(i, 1)
        }
      })
    } else {
      delete this.events[name]
    }
  }
}

export default BusConstructor
