const checker = require('./checker');


const index = [
  checker.home.index(),
];

const hello = [
  checker.user.login(),
  checker.home.hello(),
];

module.exports = { index, hello };
