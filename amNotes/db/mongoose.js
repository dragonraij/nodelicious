var mongoose = require('mongoose');

mongoose.Promise = global.Promise;


mongoose.connect('mongodb://admin:password123@ds261678.mlab.com:61678/todo');

module.exports = {mongoose};