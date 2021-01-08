import { reactive } from 'vue'
import matchMedia from './match-media'

export default {
  install (app, queries) {
    const state = reactive({
      devices: {}
    })
    const addDevice = (name, active) => {
      state.devices[name] = active

      return ({ matches }) => {
        state.devices[name] = matches
      }
    }
    Object.keys(queries).forEach(name => {
      const query = matchMedia(`(${queries[name]})`)

      const update = addDevice(name, query.matches)
      query.addListener(update)
    })

    app.config.globalProperties.$device = state.devices
  }
}
