let app = new Vue({
    el: '#app',
    data: {
        now: '00:00:00'
    },
    methods: {
        time: function (e) {
            let date = new Date();

            this.now = date.getHours() + ":" +
                date.getMinutes() + ":" +
                date.getSeconds();
        }
    }
});