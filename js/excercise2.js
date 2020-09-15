createVueDemo = function () {
    new Vue({
        el: '#excercise2',
        data: {
            keyDownValue: 0,
            keyDownValue2: 0
        },
        methods: {
            // to pass value as argument and receive as event
            clickMe: function () {
                alert("Hello")
            },
            keyDown: function (event) {
                this.keyDownValue= event.target.value;
            },
            keyDown2: function (event) {
                this.keyDownValue2= event.target.value;
            },
            alertMe: function () {
                alert("Hello")
            }
        }
    });
};