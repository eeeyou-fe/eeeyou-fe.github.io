/**
 * 转换为金额类型
 * @param {*} num 数字
 * @param {*} padEnd 是否强制小数点后2位（不够补0）
 * @param {*} hasComma 是否有千分位
 * @returns
 */
function toMoney(num, padEnd = true, hasComma = true) {
  if (num != undefined) {
    let n = Number(num); // 转换类型
    n = Number(n.toFixed(2)); // 保留两位小数
    let str = n.toLocaleString(); // 分割千分位
    if (!hasComma) {
      str = str.replace(/,/g, '');
    }
    const arr = str.split('.'); // 以小数点分割
    if (padEnd) {
      return arr.length == 2 ? `${arr[0]}.${arr[1].padEnd(2, '0')}` : str + '.00';
    } else {
      return arr.length == 2 ? `${arr[0]}.${arr[1]}` : str;
    }
  }
  return '-';
}

export default { toMoney };
