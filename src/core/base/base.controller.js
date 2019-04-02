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
            this.toastedInfo(this.$i18n.t('common.alter'));
        },
        toastedSuccess: function(message) {
            this.$toasted.success(message, { icon: 'check' });
        },
        toastedInfo: function(message) {
            this.$toasted.info(message, { icon: 'info' });
        },
        toastedError: function(message) {
            this.$toasted.error(message, { icon: 'error_outline' });
        }
    }
}