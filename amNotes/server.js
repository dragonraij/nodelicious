var mongoose = require('mongoose');

mongoose.Promise = global.Promise;


mongoose.connect('mongodb://admin:password123@ds261678.mlab.com:61678/todo');

var Todo = mongoose.model('Todo', {
    text : {
        type : String,
        required : true,
        minlength: 1,
        trim:true

    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

var User = mongoose.model('User', {
    email : {
        type: String,
        required: true,
        trim: true,
        minLength : 1
    }

});

/* var newTodo = new Todo ({
    text: '',
    completed : false,
    completedAt : 2018
});

newTodo.save().then((doc) => {
    console.log('Saved Todo', doc);
}, (e) => {
    console.log('Unable to save todo')
}); */

var newUser = new User({
    email: 'myemail@yahoo.com'
});

// newUser.save().then((doc) => {
//     console.log('Saved User', doc);
// }, (e) => {
//     console.log('Unable to save user')
// });