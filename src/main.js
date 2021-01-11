import { createApp, h } from 'vue'
import App from './App.vue'

import './less/index.less'

import lazyLoad from './directives/LazyLoad.js'
import commentsOverlay from './plugins/commentsOverlay/index.js'
import * as resources from './resources/index'
import resource from './plugins/resource'

import deviceQueries from './plugins/device-queries'

import { uuid } from './js/helpers'

import router from './router'

const app = createApp({
  render: () => h(App),
  mounted () {
    window.rootVue = this
  }
})
// 路由
app.use(router)
// 描述
app.use(commentsOverlay, {
  commenterSelector () {
    return {
      id: uuid(),
      fullName: 'Mick Keeper',
      initials: 'MK',
      email: 'young@goldmorning.cn'
    }
  }
})
// 请求接口
app.use(resource, {
  resources,
  endpoint: './dist/static/api' || 'http://blog.smiledpeace.com/static/api'
})
// media screen
app.use(
  deviceQueries, {
    phone: 'max-width: 567px',
    tablet: 'min-width: 568px',
    mobile: 'max-width: 1024px',
    laptop: 'min-width: 1025px',
    desktop: 'min-width: 1280px',
    monitor: 'min-width: 1448px'
  }
)
// 指令
app.directive('lazyload', lazyLoad)
// 挂载
app.mount('#app')
