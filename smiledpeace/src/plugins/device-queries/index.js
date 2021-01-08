import { createApp, reactive } from 'vue'
import matchMedia from './match-media'

export default {
  install (app, queries) {
    const root = createApp({
      setup (props, context) {
        const state = reactive({
          devices: {}
        })
        const addDevice = (name, active) => {
          state.devices[name] = active

          return ({ matches }) => {
            state.devices[name] = matches
          }
        }

        return {
          addDevice
        }
      }
    })
    const DeviceVM = root.mount(document.createElement('div'))
    Object.keys(queries).forEach(name => {
      const query = matchMedia(`(${queries[name]})`)

      const update = DeviceVM.addDevice(name, query.matches)
      query.addListener(update)
    })

    app.config.globalProperties.$device = DeviceVM.devices
  }
}
