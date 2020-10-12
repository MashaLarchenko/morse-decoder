const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};
function fromNumtoChar(value) {

    const length = value.length / 2;
    let newValues = '';
    if (value === '*') {
        newValues = ' ';
        return newValues;
    }
    for (let i = 0; i <= length; i++) {
        const substringExp = value.slice(i * 2, i * 2 + 2);
        if (substringExp === '10') {
            newValues += '.';
        } else if (substringExp === '11') {
            newValues += '-';
        }
    }
    return MORSE_TABLE[newValues];
}

function decode(expr) {
    const expression = expr;
    const length = expression.length / 10;
    const resArr = [];

    for (let i = 0; i <= length; i++) {
        const substringExp = expression.slice(i * 10, i * 10 + 10);
        const startIdx = substringExp.indexOf('1');
        const numvalue = substringExp.slice(startIdx);
        const charValue = fromNumtoChar(numvalue);
        resArr.push(charValue)
    }
    return resArr.join('')
}

module.exports = {
    decode
}