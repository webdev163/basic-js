import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  const arr = Array.from(String(n), Number);
  const min = arr.sort((a, b) => a - b).slice(0, 1);
  return Number(n.toString().replace(min[0], ''));
}
