// index.js
// express module
const express = require("express");
// app start
const app = express();
// port number
const port = 5000;
// body-parser(library)
const bodyParser = require("body-parser");
// cookie-parser(library)
const cookieParser = require("cookie-parser");

// config url
const config = require("./config/key");
// auth url
const auth = require("./middleware/auth");

// body-parser setting(urlenCode => true) / application/x-www-form-urlencode
app.use(bodyParser.urlencoded({ extended: true }));

// body-parser setting(urlenCode => json type[change]) / application/json
app.use(bodyParser.json());
// cookieParser(save => data)
app.use(cookieParser());

// User url
const { User } = require("./models/User");

// mongoose module(DB)
const mongoose = require("mongoose");

// mongoose connection (API)
mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

// method(app => get[Testing])
app.get("/", (req, res) => {
  // response msg
  res.send("Hello, world!");
});

// method(app => post[signUp])
app.post("/api/user/signUp", (req, res) => {
  // SignUp => import infomation[User]
  // user value => post user info(json type)
  const user = new User(req.body);
  // mongoDB user data save
  user.save((err, user) => {
    // not successful(err)
    if (err) return res.json({ success: false, err });
    // successful(200)
    return res.status(200).json({ success: true });
  });
});

// method(app => post[login])
app.post("/api/user/login", (req, res) => {
  // request[email data find => database]
  User.findOne({ email: req.body.email }, (err, user) => {
    // False(email)
    if (!user) {
      // return type json
      return res.json({
        loginSuccess: false,
        message: "Please check your email.",
      });
    }
    // request[email success but password True OR False => Check]
    user.comparePassword(req.body.password, (err, isMatch) => {
      // err(False) => response json type[loginSuccess === false, message => '']
      if (!isMatch)
        return res.json({
          loginSuccess: false,
          message: "Please check the password.",
        });
      // request[password True => Create Token]
      user.generateToken((err, user) => {
        // err port(400) => err msg
        if (err) return res.status(400).send(err);
        // token save(cookie)
        res.cookie("x_auth", user.token).status(200).json({
          loginSuccess: true,
          userId: user._id,
        });
      });
    });
  });
});

// auth(middleware)
app.get("/api/users/auth", auth, (req, res) => {
  // Authentication is True[Middleware => success process]
  res.status(200).json({
    // user info[data => get]
    _id: req.user._id,
    // admin => 1 / user => 0
    isAdmin: req.user.role === 0 ? false : true,
    isAuth: true,
    email: req.user.email,
    name: req.user.name,
    role: req.user.role,
    image: req.user.image,
  });
});

// show port number & testing
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
