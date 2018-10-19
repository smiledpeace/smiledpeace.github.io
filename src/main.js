import Vue from 'vue';

import './less/index.less';

import App from './App'
import lazyLoad from './directives/LazyLoad.js';
import commentsOverlay from './plugins/commentsOverlay/index.js';
import * as resources from './resources/index'
import resource from './plugins/resource';


import deviceQueries from './plugins/device-queries'

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
    endpoint: 'http://blog.smiledpeace.com/static/api'
});

Vue.use(deviceQueries, {
    phone: 'max-width: 567px',
    tablet: 'min-width: 568px',
    mobile: 'max-width: 1024px',
    laptop: 'min-width: 1025px',
    desktop: 'min-width: 1280px',
    monitor: 'min-width: 1448px'
})



const vm = new Vue({
    router,
    render: h => h(App),
    mounted() {
        window.rootVue = this;
    },
}).$mount('#app')


