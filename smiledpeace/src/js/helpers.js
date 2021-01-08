// https://stackoverflow.com/a/2117523/535606
export function uuid () {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  )
}

export const kebabify = (words) =>
  words
    .toLowerCase()
    .replace(' ', '-')

export const prettyDate = (date) =>
  new Date(date)
    .toString()
    .split(' ')
    .slice(0, 4)
    .join(' ')
    .replace(/( \d+)$/, ',$1')

export const scrollTo = function (from, to, callback, duration = 1.2) {
  if (from === to || from < to) {
    return false
  }
  let speed = 0
  if (from < to) {
    speed = to - from
  } else {
    speed = from - to
  }
  const step = function () {
    speed = parseInt(speed / duration)

    if (speed < 1) {
      callback(speed, false)
      return 0
    } else {
      callback(speed)
      requestAnimationFrame(step)
    }
  }
  step()
}
