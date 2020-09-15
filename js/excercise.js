/**
 * Created by Venkat on 9/15/2020.
 */
createVueDemo = function () {
    new Vue({
        el: '#excercise',
        data: {
            name: 'Chary',
            age: '42',
            title: 'Venkat',
            randomNumber: 0,
            image:'https://image.freepik.com/free-photo/tulips-bouquet-pink-background-with-copyspace_24972-271.jpg'
        },
        methods: {
            generateRandomNumber: function () {
                return this.randomNumber = Math.floor(Math.random() * 10)
            }
        }
    });
};