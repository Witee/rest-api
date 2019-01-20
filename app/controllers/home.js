const checker = require('./checker');


const index = [
  checker.user.login(),
  checker.home.hello(),
];

module.exports = { index };
