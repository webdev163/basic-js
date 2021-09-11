import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  let counter = 0;
  let result = '';
  const arr = str.split('');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] !== arr[i]) {
      counter++;
      counter > 1 ? result += `${counter}${arr[i]}` : result += `${arr[i]}`;
      counter = 0;
    } else {
      counter++;
    }
  }
  return result;
}

// AssertionError: expected 'aa4att4t' to equal '4a4t'