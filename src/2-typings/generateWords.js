let makeOrdinal = require('./makeOrdinal');
let isInfinite = require('./isFinite');
let isSafeNumber = require('./isSafeNumber');
const LESS_THAN_TWENTY = [
    'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
    'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
];
const TENTHS_LESS_THAN_HUNDRED = [
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
function toWords(number, asOrdinal) {
    let words;
    let num = parseInt(String(number), 10);
    if (!isInfinite(num)) {
        throw new TypeError('Not a finite number: ' + number + ' (' + typeof number + ')');
    }
    if (!isSafeNumber(num)) {
        throw new RangeError('Input is not a safe number, it’s either too large or too small.');
    }
    words = generateWords(num);
    return asOrdinal ? makeOrdinal(words) : words;
}
const generateWords = (num, words) => {
    let remainder = 0, word = '';
    // First run
    if (!words) {
        words = [];
    }
    // We’re done
    if (num === 0)
        return !words ? 'zero' : words.join(' ').replace(/,$/, '');
    // If negative, prepend “minus”
    if (num < 0) {
        words.push('minus');
        num = Math.abs(num);
    }
    switch (num < 20) {
        case (num < 100 /* NumberOrders.ONE_HUNDRED */):
            remainder = num % 10 /* NumberOrders.TEN */;
            word = TENTHS_LESS_THAN_HUNDRED[Math.floor(num / 10 /* NumberOrders.TEN */)];
            if (remainder) {
                word += `-${LESS_THAN_TWENTY[remainder]}`;
                remainder = 0;
            }
            break;
        case (num < 1000 /* NumberOrders.ONE_THOUSAND */):
            remainder = num % 100 /* NumberOrders.ONE_HUNDRED */;
            word = generateWords(Math.floor(num / 100 /* NumberOrders.ONE_HUNDRED */)) + ' hundred';
            break;
        case (num < 1000000 /* NumberOrders.ONE_MILLION */):
            remainder = num % 1000 /* NumberOrders.ONE_THOUSAND */;
            word = generateWords(Math.floor(num / 1000 /* NumberOrders.ONE_THOUSAND */)) + ' thousand,';
            break;
        case (num < 1000000000 /* NumberOrders.ONE_BILLION */):
            remainder = num % 1000000 /* NumberOrders.ONE_MILLION */;
            word = generateWords(Math.floor(num / 1000000 /* NumberOrders.ONE_MILLION */)) + ' million,';
            break;
        case (num < 1000000000000 /* NumberOrders.ONE_TRILLION */):
            remainder = num % 1000000000 /* NumberOrders.ONE_BILLION */;
            word = generateWords(Math.floor(num / 1000000000 /* NumberOrders.ONE_BILLION */)) + ' billion,';
            break;
        case (num < 1000000000000000 /* NumberOrders.ONE_QUADRILLION */):
            remainder = num % 1000000000000 /* NumberOrders.ONE_TRILLION */;
            word = generateWords(Math.floor(num / 1000000000000 /* NumberOrders.ONE_TRILLION */)) + ' trillion,';
            break;
        case (num <= 9007199254740992 /* NumberOrders.MAX */):
            remainder = num % 1000000000000000 /* NumberOrders.ONE_QUADRILLION */;
            word = generateWords(Math.floor(num / 1000000000000000 /* NumberOrders.ONE_QUADRILLION */)) + ' quadrillion,';
            break;
        default:
            word = LESS_THAN_TWENTY[num];
            break;
    }
    words.push(word);
    return generateWords(remainder, words);
};
export default toWords;
