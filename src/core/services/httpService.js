import Vue from 'vue'
import CONST from '../const'

export default {
    post: function(apiUrl, data) {
        var promise = new Promise((resolve, reject) => {
            Vue.http.post(apiUrl, data).then(response => {
                resolve(response.body);
            }, error => {
                let jsonReturn = {
                    code: CONST.RESULT_CODE.ERROR,
                    message: window["vueApp"].$i18n.t('common.error')
                }
                reject(jsonReturn);
            });
        }).catch(e => {
            console.log(e);
            let jsonReturn = {
                code: CONST.RESULT_CODE.ERROR,
                message: window["vueApp"].$i18n.t('common.error')
            }
            Vue.toasted.error(window["vueApp"].$i18n.t('common.error'), { icon : 'error_outline'});
            
            return jsonReturn;
        });
        return promise;
    },
    get: function(apiUrl) {
        var promise = new Promise((resolve, reject) => {
            Vue.http.get(apiUrl).then(response => {
                resolve(response.body);
            }, error => {
                let jsonReturn = {
                    code: CONST.RESULT_CODE.ERROR,
                    message: window["vueApp"].$i18n.t('common.error')
                }
                reject(jsonReturn);
            });
        }).catch(e => {
            console.log(e);
            let jsonReturn = {
                code: CONST.RESULT_CODE.ERROR,
                message: window["vueApp"].$i18n.t('common.error')
            }
            Vue.toasted.error(window["vueApp"].$i18n.t('common.error'), { icon : 'error_outline'});
            
            return jsonReturn;
        });
        return promise;
    }
}