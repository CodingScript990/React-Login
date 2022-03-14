// key.js
// process method Node Env
if (process.env.NODE_ENV === "production") {
  // module exports url('/prod')
  module.exports = require("./prod");
} else {
  // modlue exports url('/dev')
  module.exports = require("./dev");
}
