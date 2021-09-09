import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  if (!Array.isArray(arr)) throw new Error('\'arr\' parameter must be an instance of the Array!');
  let result = arr.slice(0);
  for (let i = 0; i < result.length; i++) {
    if (result[i] === '--discard-prev' && result[i - 1] !== undefined) result.splice(i - 1, 2);
    if (result[i] === '--double-prev' && result[i - 1] !== undefined) result[i] = result [i - 1];
    if (result[i] === '--double-next' && result[i + 1] !== undefined) result[i] = result[i + 1];
    if (result[i] === '--discard-next' && result[i + 1] !== undefined) result.splice(i, 2);
  }
  return result.filter(el => el !== '--discard-prev' && el !== '--double-prev' && el !== '--double-next' && el !== '--discard-next');
}
