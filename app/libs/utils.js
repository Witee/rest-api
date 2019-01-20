const _ = require('lodash');
const fs = require('fs');

/**
  返回目录下所有可导入的模块列表

  dir 要加载的目录
  exts 要加载的模块文件后缀，多个可以是数组, 默认为 js
  excludes 要排除的文件, 默认排除 index
*/
const readdir = (dir, ext = 'js', exclude = 'index') => {
  const exts = _.isString(ext) ? [ext] : ext;
  const excludes = _.isString(exclude) ? [exclude] : exclude;

  return _.chain(fs.readdirSync(dir))
    .map((x) => x.split('.'))
    .filter((x) => _.includes(exts, x[1]) && !_.includes(excludes, x[0]))
    .map((x) => x[0])
    .value();
};

/**
  兼容 es6 的 export
*/
const es6import = (obj) => {
  const isES6 = _.size(obj) === 1 && hasOwnProperty.call(obj, 'default');
  return isES6 ? obj.default : obj;
};

/**
  根据设置的路径，获取对象
*/
const getModules = (path, exts, excludes) => {
  const modules = {};

  if (!_.isString(path)) return path;
  if (!fs.existsSync(path)) return modules;

  _.each(readdir(path, exts, excludes), (file) => {
    const name = _.camelCase(file);
    modules[name] = es6import(require(`${path}/${file}`));
  });

  return modules;
};


module.exports = {
  readdir,
  es6import,
  getModules,
};
