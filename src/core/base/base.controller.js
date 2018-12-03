export default {
    data: function() {
        return {
            messageFromBase: this.$i18n.t('common.message')
        };
    },
    created: function() {
        
    },
    methods: {
        methodFromBase: function() {
            this.$toasted.info(this.$i18n.t('common.alter'), { icon: 'notification_important' });
        }
    }
}