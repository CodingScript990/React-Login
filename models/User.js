// User.js
// mongoose module
const mongoose = require("mongoose");
// bcrypt library
const bcrypt = require("bcrypt");
// saltRounds length
const saltRounds = 10;
// jwt[jsonwebtoken] module
const jwt = require("jsonwebtoken");

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

// userSchema save in before data
userSchema.pre("save", function (next) {
  // props => next
  // user info(value)
  let user = this;
  // user password [change(password value)]
  if (user.isModified("password")) {
    // password encryption(암호화)
    bcrypt.genSalt(saltRounds, function (err, salt) {
      // return err
      if (err) return next(err);
      // bcrypt(hash => change password encryption)
      // DB password value => change[encryption password]
      bcrypt.hash(user.password, salt, function (err, hash) {
        // err msg
        if (err) return next(err);
        // successful hash
        user.password = hash;
        // callback next();
        next();
      });
    });
  } else {
    // not password
    next();
  }
});

// userSchema method[password]
userSchema.methods.comparePassword = function (plainPassword, cb) {
  // plainPassword not encryption(암호화) => change encription
  bcrypt.compare(plainPassword, this.password, function (err, isMatch) {
    // err(False)
    if (err) return cb(err);
    // success(True)
    cb(null, isMatch);
  });
};

// userSchema method[Token]
userSchema.methods.generateToken = function (cb) {
  // user data
  let user = this;
  // jsonwebtoken[token add]
  let token = jwt.sign(user._id.toHexString(), "secretToken");
  // user token => token[data]
  user.token = token;
  // token add false(err)
  user.save(function (err, user) {
    if (err) return cb(err);
    cb(null, user);
  });
};

// userSchema method[auth,token]
userSchema.statics.findByToken = function (token, cb) {
  // user data
  let user = this;
  // token is decode.
  jwt.verify(token, "secretToken", function (err, decoded) {
    // user id find and client in token data === DB save token check[Correspond(일치하는가)]?
    user.findOne({ _id: decoded, token: token }, function (err, user) {
      // err![False]
      if (err) return cb(err);
      // success[True]
      cb(null, user);
    });
  });
};

// User(Callback)
const User = mongoose.model("User", userSchema);

// export module(User)
module.exports = { User };
