
createVueDemo = function () {
    new Vue({
        el: '#app',
        data: {
            title: 'Hello World'
        },
        template: '<div>{{ sayHello }}</div>',
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

