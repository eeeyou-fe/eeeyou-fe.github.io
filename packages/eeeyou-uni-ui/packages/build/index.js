const path = require('path');
const util = require('./util.js');

const root = path.join(__dirname, '../..');
const lib = path.join(root, 'packages/lib');
const eyou = path.join(root, 'src/uni_modules');
const packages = util.readDir(eyou);
packages.reduce((promise, item) => {
  if (item.indexOf('ey-') == -1) {
    return promise;
  }
  const comPath = path.join(eyou, item, 'components');
  const coms = util.readDir(comPath);
  return coms.reduce((promise, item) => {
    const componentsPath = path.join(comPath, item);
    util.copy(componentsPath, path.join(lib, item))
    return promise
  }, promise)
}, Promise.resolve([])).then(() => {
  console.log('ok');
})