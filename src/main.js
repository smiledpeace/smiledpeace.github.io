import Vue from 'vue';

console.log(Vue);/*  */

import './less/index.less';
import App from './App'
import lazyLoad from './directives/LazyLoad.js';
import commentsOverlay from './plugins/commentsOverlay/index.js';
import * as resources from './resources/index'
import resource from './plugins/resource';

import { uuid } from './js/helpers';

import router from './router'

Vue.directive("lazyload", lazyLoad);

Vue.use(commentsOverlay, {
    commenterSelector() {
        return {
            id: uuid(),
            fullName: 'Mick Keeper',
            initials: 'MK',
            email: 'young@goldmorning.cn'
        }
    },
})
Vue.use(resource, {
    resources,
    endpoint: '/static/api'
});
const vm = new Vue({
    router,
    render: h => h(App),
}).$mount('#app')


