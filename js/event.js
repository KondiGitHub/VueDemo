createVueDemo = function () {
    new Vue({
        el: '#app',
        data: {
           counter: 0,
            x:0,
            y:0
        },
        methods: {
            // to pass value as argument and receive as event
            increase: function (step, event) {
                console.log("event value::"+event.target.value)
                this.counter+=step
            },
            updateCoordinates: function (event) {
                this.x= event.clientX;
                this.y =event.clientY
            }
        }
    });
};