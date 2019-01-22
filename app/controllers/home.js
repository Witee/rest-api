import checker from './checker';


const index = [
  checker.home.index(),
];

const hello = [
  checker.user.login(),
  checker.home.hello(),
];

export { index, hello };
