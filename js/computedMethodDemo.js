
createVueDemo = function () {
    new Vue({
        el: '#app',
        data: {
            counter: 0,
            secondCounter: 0
        },
        computed: {
            output: function () {
                console.log("computed");
                return this.counter >5 ? 'Greater 5': 'Smaller 5'

            }
        },
        watch: {

            counter : function() {
                var vm = this;
                setTimeout(function(){
                    vm.counter = 0;
                },2000)
            }

        },
        methods: {
            result: function () {
                console.log("methods");
                return this.counter >5 ? 'Greater 5': 'Smaller 5'
            }
        }
    });
}

