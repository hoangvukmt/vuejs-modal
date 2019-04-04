export default {
    created: function() {
        this.modalData = [
            { id: 1, text: "item 1" }, 
            { id: 2, text: "item 2" },
            { id: 3, text: "item 3" },
            { id: 4, text: "item 4" }
        ];
    },
    data: function () {
        return {
            modalData: []
        }
    },
    props: {
        params: Object
    },
    methods: {
        choseData: function (selected) {
            this.$root.$emit('modalSelected', selected);
            this.$emit('close');
        }
    }
}