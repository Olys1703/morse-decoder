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
    // write your solution here
    let index
    let jndex
    let decoded_str = ''
    let next_is_letter = false
    let buffer = ''

    for (index = 0; index < expr.length; index += 10) {
        if (expr[index] == '*') {
            decoded_str = decoded_str + ' '
        }
        else {
            for ( jndex = index; jndex < (index + 10); jndex++ ) {
                if (next_is_letter) {
                    if (expr[jndex] == '1') {
                        buffer = buffer + '-' 
                    }
                    else {
                        buffer = buffer + '.' 
                    }
                    next_is_letter = false
                }
                else {
                    if (expr[jndex] == '1') {
                        next_is_letter = true
                    }
                }
            }

            decoded_str = decoded_str + MORSE_TABLE[buffer]
            buffer = ''

        }
    }
    
    return decoded_str
}

module.exports = {
    decode
}