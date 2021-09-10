import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  if (!("separator" in options)) options.separator = '+';
  if (!("additionSeparator" in options)) options.additionSeparator = '|';
  if (options.addition === null) options.addition = 'null';
  return new Array(options.repeatTimes).fill(str + new Array(options.additionRepeatTimes).fill(options.addition).join(options.additionSeparator)).join(options.separator);
}
