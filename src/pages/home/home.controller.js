import MasterLayout from '../../layouts/master/master-layout.vue'
import BaseController from '../../core/base/base.vue'
import httpService from '../../core/services/httpService'
import CONST from '../../core/const'

export default {
    extends: BaseController,
    components: {
        MasterLayout
    },
    data: function() {
        return {
            message: this.$i18n.t('private.message')
        };
    },
    methods: {
        methodFromComponent: function() {
            this.toastedInfo(this.$i18n.t('private.alter'));
        },
        callPostApi: function() {
            let data = {
                user_no: 1
            }
            httpService.post(CONST.apiUrl + CONST.API_URL.getListAgent, data).then((res) => {
                if (res.code === CONST.RESULT_CODE.SUCCESS) {
                    
                }
            });
        },
        callPopup: function() {
            
        }
    }
}