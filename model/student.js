var mongoose = require('mongoose');

var validateEmail = (email) => {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};
var Student = mongoose.model('Student', {
    name:{
        type: String,
        required: true,
        minlength:3,
        trim: true
    },
    email:{
        type: String,
        required: true,
        validate: [validateEmail, 'Please fill a valid email address'],
        trim:true
    },
    address:{
        type: String,
        default:null,
        trim:true
    },
    active:{
        type: Boolean,
        default:true
    }

});