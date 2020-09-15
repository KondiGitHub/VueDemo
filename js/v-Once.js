
createVueDemo = function () {
    new Vue({
        el: '#app',
        data: {
            title: 'Hello World',
            finishedLink: '<a href="http://google.com">Google</a>'
        },
        methods: {
            sayHello : function () {
                this.title = 'Hello'
                return this.title
            }
        }
    });
};

