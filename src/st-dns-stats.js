import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
  const tempArr = new Array;
  const result = new Object;
  for (let i = 0; i < domains.length; i++) {
    const arr = domains[i].split('.').reverse();
    arr.forEach((el, ndx) => {
      ndx === 0 ? tempArr.push(`.${arr[0]}`) : ndx === 1 ? tempArr.push(`.${arr[0]}.${arr[1]}`) : tempArr.push(`.${arr[0]}.${arr[1]}.${arr[2]}`);
    })
  }
  tempArr.forEach((el) => !(result[el]) ? result[el] = 1 : result[el] += 1);
  return result;
}
