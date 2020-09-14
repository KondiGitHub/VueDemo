
createVueDemo = function () {
    new Vue({
        el: '#app',
        data: {
            title: 'Hello World',
            link: 'http://google.com'
        },
        methods: {
            sayHello: function () {
                return this.title

            },
            changeTitle : function (event) {
                this.title= event.target.value;
            }
        }
    });
}

