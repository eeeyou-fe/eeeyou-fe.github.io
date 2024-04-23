import { REG_CHINESE } from './regexp';
/**
 * 获取字符串长度
 * 中文算2个字符
 * @param {*} str
 * @returns
 */
function getStrLen(str) {
  const cArr = str.match(REG_CHINESE);
  return str.length + (cArr == null ? 0 : cArr.length);
}
/**
 * 截取指定长度的字符串
 * 中文算2个字符
 * @param {*} str
 * @param {*} len
 * @returns
 */
function getSubstr(str, len) {
  const space = '  '; // 两个空格
  if (str.replace(REG_CHINESE, space).length <= len) {
    return str;
  }
  const m = Math.floor(len / 2);
  for (let i = m; i <= str.length; i++) {
    const l = str.substr(0, i).replace(REG_CHINESE, space).length;
    if (l > len) {
      return str.substr(0, i - 1);
    } else if (l == len) {
      return str.substr(0, i);
    }
  }
  return str;
}

export default { getStrLen, getSubstr };
