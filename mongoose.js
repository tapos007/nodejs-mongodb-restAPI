var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/StudentAPI');

module.exports = {mongoose};