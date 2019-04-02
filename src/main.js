import Vue from 'vue'
import VueProgressBar from 'vue-progressbar';
import page from 'page'
import VueI18n from 'vue-i18n'
import VueResource from 'vue-resource';
import Toasted from 'vue-toasted';
import routes from './routes'

Vue.use(VueI18n);
Vue.use(VueResource);
Vue.use(Toasted, {
    iconPack: 'material',
    closeOnSwipe: true,
    duration: 2000
});
Vue.use(VueProgressBar, {
    color: 'blue',
    failedColor: 'red',
    height: '5px',
    autoFinish: false
});

Vue.http.interceptors.push((request, next)  => {
    window["vueApp"].$Progress.start();
    let contentType = 'application/json';
    request.headers['Content-Type'] = contentType;
    request.headers['x-access-token'] = localStorage.getItem('id_token') == null ? '' : localStorage.getItem('id_token');
    next((response) => {
        if (response.ok) {
            window["vueApp"].$Progress.finish();
        }
        else {
            window["vueApp"].$Progress.fail();
        }
    });
});

const locale = localStorage.getItem('language') !== null ? localStorage.getItem('language') : 'vn';
const messages = {};
const i18n = new VueI18n({
    locale,
    messages,
    fallbackLocale: 'vn'
});

const app = new Vue({
    el: '#app',
    i18n,
    data: {
        ViewComponent: { render: h => h('div', 'loading...') }
    },
    render (h) { return h(this.ViewComponent) }
});

Object.keys(routes).forEach(route => {
    const Component = require('./pages/' + routes[route] + '/' + routes[route] + '.vue')
    page(route, () => {
        const i18nJson = {
            'common': require('./assets/i18n/common/' + locale + '.json'),
            'private': require('./assets/i18n/' + routes[route] + '/' + locale + '.json')
        }
        app.$i18n.setLocaleMessage(locale, i18nJson);
        app.ViewComponent = Component;
    });
});

page('*', () => app.ViewComponent = require('./layouts/errors/404.vue'));
page();
window["vueApp"] = app;