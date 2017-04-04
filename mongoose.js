var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/StudentAPI');
mongoose.Promise = global.Promise;
module.exports = {mongoose};