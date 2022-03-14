// User.js
// mongoose module
const mongoose = require("mongoose");

// userSchema value
const userSchema = mongoose.Schema({
  // name
  name: {
    type: String,
    maxlength: 50,
  },
  // email
  email: {
    type: String,
    trim: true,
    unique: 1,
  },
  // password
  password: {
    type: String,
    minlength: 5,
  },
  // role
  role: {
    type: Number,
    default: 0,
  },
  // image
  image: String,
  // token
  token: {
    type: String,
  },
  // tokenExp
  tokenExp: {
    type: Number,
  },
});

// User(Callback)
const User = mongoose.model("User", userSchema);

// export module(User)
module.exports = { User };
