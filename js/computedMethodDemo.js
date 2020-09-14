
createVueDemo = function () {
    new Vue({
        el: '#app',
        data: {
            title: 'Hello World'
        },
        template: '<div>{{ sayHello }}</div>',
        computed: {
            sayHello: function () {
                return this.title.toUpperCase()

            }
        }
    });
}

