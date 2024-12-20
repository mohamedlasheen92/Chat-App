const { Schema } = require("mongoose");

const userSchama = new Schema({
  email: {
    type: String,
    required: [true, 'Email is Required'],
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please enter a valid email'
    ]
  },
  otp: {
    type: String,
    required: [true, 'OTP is Required'],
    unique: true,
    minlength: [6, 'OTP should be at least 6 characters long'],
    maxlength: [6, 'OTP should be at most 6 characters long']
  }


})

module.exports = mongoose.model('User', userSchama);