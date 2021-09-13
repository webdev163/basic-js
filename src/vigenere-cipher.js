import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
export default class VigenereCipheringMachine {
  constructor(bool = true) {
    bool === true ? this.reversed = false : this.reversed = true;
  }
  
  encrypt(str, key) {
    if (!str || !key) throw new Error('Incorrect arguments!');
    let counter = 0;
    const strArr = str.split('').filter(el => /[a-zA-Z]/.test(el));
    while (strArr.length > key.length) key += key;
    key = key.slice(0, strArr.length);
    const keyArr = key.split('');
    for (let i = 0; i < strArr.length; i++) {
      if (strArr[i] === strArr[i].toLowerCase() && strArr[i].charCodeAt(0) > 96 && strArr[i].charCodeAt(0) < 123) {
        const offset = keyArr[i].toLowerCase().charCodeAt(0) - 97;
        let ndx = strArr[i].charCodeAt(0) + offset;
        if (ndx > 122) ndx = ndx - 26;
        strArr[i] = String.fromCharCode(ndx);
      } else if (strArr[i].charCodeAt(0) > 64 && strArr[i].charCodeAt(0) < 91) {
        const offset = keyArr[i].toUpperCase().charCodeAt(0) - 65;
        let ndx = strArr[i].charCodeAt(0) + offset;
        if (ndx > 90) ndx = ndx - 26;
        strArr[i] = String.fromCharCode(ndx);
      }
    }
    const result = str.split('').map(el => {
      if (/[a-zA-Z]/.test(el)) {
        el = strArr[counter];
        counter++;
      }
      return el;
    })
    return this.reversed === true ? result.reverse().join('').toUpperCase() : result.join('').toUpperCase();
  }

  decrypt(str, key) {
    if (!str || !key) throw new Error('Incorrect arguments!');
    let counter = 0;
    const strArr = str.split('').filter(el => /[a-zA-Z]/.test(el));
    while (strArr.length > key.length) key += key;
    key = key.slice(0, strArr.length);
    const keyArr = key.split('');
    for (let i = 0; i < strArr.length; i++) {
      if (strArr[i] === strArr[i].toLowerCase() && strArr[i].charCodeAt(0) > 96 && strArr[i].charCodeAt(0) < 123) {
        const offset = keyArr[i].toLowerCase().charCodeAt(0) - 97;
        let ndx = strArr[i].charCodeAt(0) - offset;
        if (ndx < 97) ndx = ndx + 26;
        strArr[i] = String.fromCharCode(ndx);
      } else if (strArr[i].charCodeAt(0) > 64 && strArr[i].charCodeAt(0) < 91) {
        const offset = keyArr[i].toUpperCase().charCodeAt(0) - 65;
        let ndx = strArr[i].charCodeAt(0) - offset;
        if (ndx < 65) ndx = ndx + 26;
        strArr[i] = String.fromCharCode(ndx);
      }
    }
    const result = str.split('').map(el => {
      if (/[a-zA-Z]/.test(el)) {
        el = strArr[counter];
        counter++;
      }
      return el;
    })
    return this.reversed === true ? result.reverse().join('').toUpperCase() : result.join('').toUpperCase();
  }
}
