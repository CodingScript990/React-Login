// index.js
// express module
const express = require("express");
// app start
const app = express();
// port number
const port = 5000;
// mongoose module(DB)
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://root:musicadmin1@musicdb.1hfrt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

// method(app => get)
app.get("/", (req, res) => {
  // response msg
  res.send("Hello, world!");
});

// show port number & testing
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
