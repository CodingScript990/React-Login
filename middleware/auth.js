// auth.js
// User url
const { User } = require("../models/User");
// auth [req, res, next]
let auth = (req, res, next) => {
  // Certification process[인증 과정]
  // 1. client cookie => token Bring
  let token = req.cookies.x_auth;
  // 2. encryption after => find user
  User.findByToken(token, (err, user) => {
    // middelware Process[err, success]
    // err throw
    if (err) throw err;
    // not user
    if (!user) return res.json({ isAuth: false, error: true });
    // success[user => token]
    req.token = token;
    // success[user => user]
    req.user = user;
    // next api(callback)
    next();
  });
  // 3. user [True] => auth Ok
  // 4. user [Fasle] => auth No
};

// module exports[auth]
module.exports = { auth };
