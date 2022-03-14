// index.js
// express module
const express = require("express");
// app start
const app = express();
// port number
const port = 5000;
// body-parser(library)
const bodyParser = require("body-parser");

// config url
const config = require("./config/key");

// body-parser setting(urlenCode => true) / application/x-www-form-urlencode
app.use(bodyParser.urlencoded({ extended: true }));

// body-parser setting(urlenCode => json type[change]) / application/json
app.use(bodyParser.json());

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

// method(app => post[user])
app.post("/signUp", (req, res) => {
  // SignUp => import infomation[User]
  // user value => post user info(json type)
  const user = new User(req.body);
  // mongoDB user data save
  user.save((err, userInfo) => {
    // not successful(err)
    if (err) return res.json({ success: false });
    // successful(200)
    return res.status(200).json({ success: true });
  });
});

// show port number & testing
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
