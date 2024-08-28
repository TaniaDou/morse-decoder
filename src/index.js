const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let symbols = {
        '00': '',
        '10': '.',
        '11': '-',
    }

    let sentence = [];

    for(i = 0; i < expr.length; i += 10 ) {
       let section = expr.slice(i, i + 10);
       if (dec = '**********') {
        dec = ' ';
       }    
    
        let letter = [];

        for(i= 0; i < 10; i += 2) {
        let symbol = section.slice(i, i + 2);
        letter.push(symbol);
    }
    sentence.push(letter);
}
    let codedSentence = [];
    for(let item of sentence){
        let codedLetter = '';
        item.forEach(el => el in symbols ? codedLetter += symbols[el] : codedLetter += '');
        codedSentence.push(codedLetter);
    }
    let result = '';
    codedSentence.forEach(el => result += MORSE_TABLE[el]);
    return result;
}


module.exports = {
    decode
}