var mongoose = require('mongoose');

mongoose.Promise = global.Promise;


mongoose.connect('mongodb://admin:password123@ds261678.mlab.com:61678/todo');

var Todo = mongoose.model('Todo', {
    text : {
        type : String

    },
    completed: {
        type: Boolean
    },
    completedAt: {
        type: Number
    }
});

var newTodo = new Todo ({
    text: 'Cook dinner'
});

newTodo.save().then((doc) => {
    console.log('Saved Todo', doc);
}, (e) => {
    console.log('Unable to save todo')
});
