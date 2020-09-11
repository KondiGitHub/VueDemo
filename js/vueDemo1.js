
createVueDemo = function () {
    new Vue({
        el: '#app',
        data: {
            title: 'Hello World'
        },
        methods: {
            sayHello: function () {
                return "Hello"

            },
            changeTitle : function (event) {
                this.title= event.target.value;
            }
        }
    });
}

