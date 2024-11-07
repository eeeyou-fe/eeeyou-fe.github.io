const fs = require('fs');
const path = require('path');

/**
 * 读取文件
 * @param {Object} url
 */
const read = (url) => {
  return fs.readFileSync(url).toString();
}

/**
 * 写入文件
 * @param {Object} url
 * @param {Object} content
 */
const write = (url, content) => {
  return fs.writeFileSync(url, content);
}

const copy = (src, dist) => {
  var stat = fs.statSync(src);
  if (stat.isFile()) {
    copyFile(src, dist);
  } else {
    copyDir(src, dist);
  }
}

/**
 * 拷贝文件
 * @param {Object} from 文件来自那里
 * @param {Object} to		拷贝到那里
 */
const copyFile = (from, to) => {
  return write(to, read(from));
}

/**
 * 删除目录
 * @param {Object} path
 */
const deleteDir = (path) => {
  let files = [];
  if (fs.existsSync(path)) {
    files = fs.readdirSync(path);
    files.forEach((file, index) => {
      let curPath = path + '/' + file;
      if (fs.statSync(curPath).isDirectory()) {
        deleteDir(curPath);
      } else {
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(path);
  }
}

/**
 * 拷贝目录以及子文件
 * @param {Object} src
 * @param {Object} dist
 * @param {Object} callback
 */
const copyDir = (src, dist) => {
  var b = fs.existsSync(dist);
  if (!b) {
    createDir(dist); //创建目录
  }
  var paths = fs.readdirSync(src);
  paths.forEach((p)=> {
    var _src = src + '/' + p;
    var _dist = dist + '/' + p;
    var stat = fs.statSync(_src);
    if (stat.isFile()) { // 判断是文件还是目录
      fs.writeFileSync(_dist, fs.readFileSync(_src));
    } else if (stat.isDirectory()) {
      copyDir(_src, _dist) // 当是目录是，递归复制
    }
  })
}

const readDir = (path) => {
  return fs.readdirSync(path);
}

const createDir = (dirname) => {
  if (fs.existsSync(dirname)) {
    return true;
  } else {
    if (createDir(path.dirname(dirname))) {
      fs.mkdirSync(dirname);
      return true;
    }
  }
}

module.exports = {
  copy,
  read,
  write,
  readDir,
  copyDir,
  copyFile,
  deleteDir,
}
