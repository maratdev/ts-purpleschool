declare let require: any

let makeOrdinal = require('./makeOrdinal');
let isInfinite = require('./isFinite');
let isSafeNumber = require('./isSafeNumber');

const enum NumberOrders {
  TEN = 10,
  ONE_HUNDRED = 100,
  ONE_THOUSAND = 1000,
  ONE_MILLION = 1000000,
  ONE_BILLION = 1000000000,
  ONE_TRILLION = 1000000000000,
  ONE_QUADRILLION = 1000000000000000,
  MAX = 9007199254740992,
}


const LESS_THAN_TWENTY: readonly string[] = [
  'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
  'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
];

const TENTHS_LESS_THAN_HUNDRED: readonly string[] = [
  'zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
];

/**
 * Converts an integer into words.
 * If number is decimal, the decimals will be removed.
 * @example toWords(12) => 'twelve'
 * @param {number|string} number
 * @param {boolean} [asOrdinal] - Deprecated, use toWordsOrdinal() instead!
 * @returns {string}
 */

function toWords(number: number[] | string, asOrdinal: boolean): string {
  let words;
  let num: number = parseInt(String(number), 10);

  if (!isInfinite(num)) {
    throw new TypeError(
      'Not a finite number: ' + number + ' (' + typeof number + ')'
    );
  }
  if (!isSafeNumber(num)) {
    throw new RangeError(
      'Input is not a safe number, it’s either too large or too small.'
    );
  }
  words = generateWords(num);
  return asOrdinal ? makeOrdinal(words) : words;
}


const generateWords = (num: number, words?: string[]): string => {
  let remainder: number = 0,
    word: string = '';

  // First run
  if (!words) {
    words = [];
  }

  // We’re done
  if (num === 0) return !words ? 'zero' : words.join(' ').replace(/,$/, '');


  // If negative, prepend “minus”
  if (num < 0) {
    words.push('minus');
    num = Math.abs(num);
  }


  switch (num < 20) {

    case (num < NumberOrders.ONE_HUNDRED):
      remainder = num % NumberOrders.TEN;
      word = TENTHS_LESS_THAN_HUNDRED[Math.floor(num / NumberOrders.TEN)];
      if (remainder) {
        word += `-${LESS_THAN_TWENTY[remainder]}`;
        remainder = 0;
      }
      break;

    case (num < NumberOrders.ONE_THOUSAND):
      remainder = num % NumberOrders.ONE_HUNDRED;
      word = generateWords(Math.floor(num / NumberOrders.ONE_HUNDRED)) + ' hundred';
      break;
    case  (num < NumberOrders.ONE_MILLION):
      remainder = num % NumberOrders.ONE_THOUSAND;
      word = generateWords(Math.floor(num / NumberOrders.ONE_THOUSAND)) + ' thousand,';
      break;
    case (num < NumberOrders.ONE_BILLION):
      remainder = num % NumberOrders.ONE_MILLION;
      word = generateWords(Math.floor(num / NumberOrders.ONE_MILLION)) + ' million,';
      break;
    case (num < NumberOrders.ONE_TRILLION):
      remainder = num % NumberOrders.ONE_BILLION;
      word = generateWords(Math.floor(num / NumberOrders.ONE_BILLION)) + ' billion,';
      break;
    case (num < NumberOrders.ONE_QUADRILLION):
      remainder = num % NumberOrders.ONE_TRILLION;
      word = generateWords(Math.floor(num / NumberOrders.ONE_TRILLION)) + ' trillion,';
      break;
    case (num <= NumberOrders.MAX):
      remainder = num % NumberOrders.ONE_QUADRILLION;
      word = generateWords(Math.floor(num / NumberOrders.ONE_QUADRILLION)) + ' quadrillion,';
      break;
    default:
      word = LESS_THAN_TWENTY[num];
      break;
  }

  words.push(word);
  return generateWords(remainder, words);
};

export default toWords;
