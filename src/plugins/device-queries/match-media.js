const matchMediaFallback = () => {
  const listeners = []
  let idle = true

  const device = (() => {
    const node = document.createElement('div')
    const style = document.createElement('style')

    node.id = 'match-media-node'
    style.innerHTML = `#match-media-node {
      width: 100%;
      height: 100%;
      position: absolute;
      bottom: 100%;
      overflow: scroll;
    }`

    document.head.appendChild(style)
    document.body.insertBefore(node, document.body.children[0])

    return {
      get width () {
        return node.clientWidth
      },
      get height () {
        return node.clientHeight
      },
      get orientation () {
        return (node.clientHeight > node.clientWidth)
          ? 'portrait'
          : 'landscape'
      },
      get fontSize () {
        return window
          .getComputedStyle(document.documentElement)
          .getPropertyValue('font-size')
      }
    }
  })()

  const createHandler = (feature, value) => {
    if (feature === 'orientation') {
      return () => value === device.orientation
    }

    const [prop, limit] = feature
      .split('-')
      .reverse()

    const operand = (!limit)
      ? '=='
      : (limit === 'min')
          ? '<'
          : '>'

    const parseValue = (() => {
      return (~value.indexOf('em'))
        ? () => parseFloat(value) * device.fontSize
        : () => parseFloat(value)
    })()

    const handlers = {
      width: () => parseValue() + operand + device.width,
      height: () => parseValue() + operand + device.height
    }

    return handlers[prop]
  }

  const parseQuery = (queryString) => {
    const [feature, value] = queryString.replace(/[()\s]/g, '').split(':')
    return createHandler(feature, value)
  }

  window.addEventListener('resize', () => {
    if (!idle) return
    idle = false

    let width = device.width
    let height = device.height

    const timer = setInterval(() => {
      if (width !== device.width || height !== device.height) {
        width = device.width
        height = device.height
      } else {
        clearTimeout(timer)
        listeners.forEach(handler => handler())
        idle = true
      }
    }, 100)
  })

  return (queryString) => {
    const query = parseQuery(queryString)
    const matcher = {
      get matches () {
        return query()
      }
    }

    return {
      ...matcher,
      addListener (cb) {
        const handler = () => cb(matcher)
        listeners.push(handler)
      }
    }
  }
}

const matchMedia = window.matchMedia || matchMediaFallback()

export { matchMedia as default }
