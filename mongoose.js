var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI|| 'mongodb://localhost/StudentAPI');
mongoose.Promise = global.Promise;
module.exports = {mongoose};