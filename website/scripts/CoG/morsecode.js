/**
* @copyright GNU GENERAL PUBLIC LICENSE (v3)
*/

// Morse Code Dictionary
const stmca = {
    a: ".-",
    b: "-...",
    c: "-.-.",
    d: "-..",
    e: ".",
    f: "..-.",
    g: "--.",
    h: "....",
    i: "..",
    j: ".---",
    k: "-.-",
    l: ".-..",
    m: "--",
    n: "-.",
    o: "---",
    p: ".--.",
    q: "--.-",
    r: ".-.",
    s: "...",
    t: "-",
    u: "..-",
    v: "...-",
    w: ".--",
    x: "-..-",
    y: "-.--",
    z: "--..",
    specials: {
        space: "/",
        period: ".-.-.-",
        comma: "--..--",
        dash: "-..-.",
        slash: "-....-",
        apostrophe: ".----.",
        qmark: "..--..",
        emark: "-.-.--",
        quote: ".-..-.",
        colon: "---...",
        equal: "-...-",
        add: ".-.-.",
        oper: "-.--.",
        cper: "-.--.-",
        ampersand: ".-...",
        at: ".--.-"
    },
    numbers: {
        zero: "-----",
        one: ".----",
        two: "..---",
        three: "...--",
        four: "....-",
        five: ".....",
        six: "-....",
        seven: "--...",
        eight: "---..",
        nine: "----.",
    }
}

// String to Morse Code
function stmc(string, sd) {
    let output = ''
    if (sd !== true) {
        const splitstr = string.toLowerCase().split('')
        const length = splitstr.length
        let i;
        for (i = 0; i < length; i++) {
            if (splitstr[i] == "0") {
                output += `${stmca.numbers.zero} `
            } else if (splitstr[i] == "1") {
                output += `${stmca.numbers.one} `
            } else if (splitstr[i] == "2") {
                output += `${stmca.numbers.two} `
            } else if (splitstr[i] == "3") {
                output += `${stmca.numbers.three} `
            } else if (splitstr[i] == "4") {
                output += `${stmca.numbers.four} `
            } else if (splitstr[i] == "5") {
                output += `${stmca.numbers.five} `
            } else if (splitstr[i] == "6") {
                output += `${stmca.numbers.six} `
            } else if (splitstr[i] == "7") {
                output += `${stmca.numbers.seven} `
            } else if (splitstr[i] == "8") {
                output += `${stmca.numbers.eight} `
            } else if (splitstr[i] == "9") {
                output += `${stmca.numbers.nine} `
            } else if (splitstr[i] == " ") {
                output += `${stmca.specials.space} `
            } else if (splitstr[i] == ".") {
                output += `${stmca.specials.period} `
            } else if (splitstr[i] == ",") {
                output += `${stmca.specials.comma} `
            } else if (splitstr[i] == "-") {
                output += `${stmca.specials.dash} `
            } else if (splitstr[i] == "/") {
                output += `${stmca.specials.slash} `
            } else if (splitstr[i] == "'") {
                output += `${stmca.specials.apostrophe} `
            } else if (splitstr[i] == "?") {
                output += `${stmca.specials.qmark} `
            } else if (splitstr[i] == "!") {
                output += `${stmca.specials.emark} `
            } else if (splitstr[i] == "\"") {
                output += `${stmca.specials.quote} `
            } else if (splitstr[i] == ":") {
                output += `${stmca.specials.colon} `
            } else if (splitstr[i] == "=") {
                output += `${stmca.specials.equal} `
            } else if (splitstr[i] == "+") {
                output += `${stmca.specials.add} `
            } else if (splitstr[i] == "(") {
                output += `${stmca.specials.oper} `
            } else if (splitstr[i] == ")") {
                output += `${stmca.specials.cper} `
            } else if (splitstr[i] == "&") {
                output += `${stmca.specials.ampersand} `
            } else if (splitstr[i] == "@") {
                output += `${stmca.specials.at} `
            } else if (splitstr[i] == "a") {
                output += `${stmca.a} `
            } else if (splitstr[i] == "b") {
                output += `${stmca.b} `
            } else if (splitstr[i] == "c") {
                output += `${stmca.c} `
            } else if (splitstr[i] == "d") {
                output += `${stmca.d} `
            } else if (splitstr[i] == "e") {
                output += `${stmca.e} `
            } else if (splitstr[i] == "f") {
                output += `${stmca.f} `
            } else if (splitstr[i] == "g") {
                output += `${stmca.g} `
            } else if (splitstr[i] == "h") {
                output += `${stmca.h} `
            } else if (splitstr[i] == "i") {
                output += `${stmca.i} `
            } else if (splitstr[i] == "j") {
                output += `${stmca.j} `
            } else if (splitstr[i] == "k") {
                output += `${stmca.k} `
            } else if (splitstr[i] == "l") {
                output += `${stmca.l} `
            } else if (splitstr[i] == "m") {
                output += `${stmca.m} `
            } else if (splitstr[i] == "n") {
                output += `${stmca.n} `
            } else if (splitstr[i] == "o") {
                output += `${stmca.o} `
            } else if (splitstr[i] == "p") {
                output += `${stmca.p} `
            } else if (splitstr[i] == "q") {
                output += `${stmca.q} `
            } else if (splitstr[i] == "r") {
                output += `${stmca.r} `
            } else if (splitstr[i] == "s") {
                output += `${stmca.s} `
            } else if (splitstr[i] == "t") {
                output += `${stmca.t} `
            } else if (splitstr[i] == "u") {
                output += `${stmca.u} `
            } else if (splitstr[i] == "v") {
                output += `${stmca.v} `
            } else if (splitstr[i] == "w") {
                output += `${stmca.w} `
            } else if (splitstr[i] == "x") {
                output += `${stmca.x} `
            } else if (splitstr[i] == "y") {
                output += `${stmca.y} `
            } else if (splitstr[i] == "z") {
                output += `${stmca.z} `
            }
        }
        output = output.replace(/^[ \t]+|[ \t]+$/gmi, '')
    } else {
        if (string == "a") {
            output = `${stmca.a}`
        } else if (string == "b") {
            output = `${stmca.b}`
        } else if (string == "c") {
            output = `${stmca.c}`
        } else if (string == "d") {
            output = `${stmca.d}`
        } else if (string == "e") {
            output = `${stmca.e}`
        } else if (string == "f") {
            output = `${stmca.f}`
        } else if (string == "g") {
            output = `${stmca.g}`
        } else if (string == "h") {
            output = `${stmca.h}`
        } else if (string == "i") {
            output = `${stmca.i}`
        } else if (string == "j") {
            output = `${stmca.j}`
        } else if (string == "k") {
            output = `${stmca.k}`
        } else if (string == "l") {
            output = `${stmca.l}`
        } else if (string == "m") {
            output = `${stmca.m}`
        } else if (string == "n") {
            output = `${stmca.n}`
        } else if (string == "o") {
            output = `${stmca.o}`
        } else if (string == "p") {
            output = `${stmca.p}`
        } else if (string == "q") {
            output = `${stmca.q}`
        } else if (string == "r") {
            output = `${stmca.r}`
        } else if (string == "s") {
            output = `${stmca.s}`
        } else if (string == "t") {
            output = `${stmca.t}`
        } else if (string == "u") {
            output = `${stmca.u}`
        } else if (string == "v") {
            output = `${stmca.v}`
        } else if (string == "w") {
            output = `${stmca.w}`
        } else if (string == "x") {
            output = `${stmca.x}`
        } else if (string == "y") {
            output = `${stmca.y}`
        } else if (string == "z") {
            output = `${stmca.z}`
        } else if (string == "0") {
            output = `${stmca.numbers.zero}`
        } else if (string == "1") {
            output = `${stmca.numbers.one}`
        } else if (string == "2") {
            output = `${stmca.numbers.two}`
        } else if (string == "3") {
            output = `${stmca.numbers.three}`
        } else if (string == "4") {
            output = `${stmca.numbers.four}`
        } else if (string == "5") {
            output = `${stmca.numbers.five}`
        } else if (string == "6") {
            output = `${stmca.numbers.six}`
        } else if (string == "7") {
            output = `${stmca.numbers.seven}`
        } else if (string == "8") {
            output = `${stmca.numbers.eight}`
        } else if (string == "9") {
            output = `${stmca.numbers.nine}`
        } else if (string == ' ') {
            output = `${stmca.specials.space}`
        } else if (string == '.') {
            output = `${stmca.specials.period}`
        } else if (string == ',') {
            output = `${stmca.specials.comma}`
        } else if (string == '-') {
            output = `${stmca.specials.dash}`
        } else if (string == '/') {
            output = `${stmca.specials.slash}`
        } else if (string == "'") {
            output = `${stmca.specials.apostrophe}`
        } else if (string == '?') {
            output = `${stmca.specials.qmark}`
        } else if (string == '!') {
            output = `${stmca.specials.emark}`
        } else if (string == "\"") {
            output = `${stmca.specials.quote} `
        } else if (string == ":") {
            output = `${stmca.specials.colon} `
        } else if (string == "=") {
            output = `${stmca.specials.equal} `
        } else if (string == "+") {
            output = `${stmca.specials.add} `
        } else if (string == "(") {
            output = `${stmca.specials.oper} `
        } else if (string == ")") {
            output = `${stmca.specials.cper} `
        } else if (string == "&") {
            output = `${stmca.specials.ampersand} `
        } else if (string == "@") {
            output = `${stmca.specials.at} `
        }
    }
    return output
}

// Morse Code to String
function mcts(morseCode) {
    const splitMC = morseCode.split(' ')
    const length = splitMC.length
    let i;
    let output = ''
    for (i = 0; i < length; i++) {
        if (splitMC[i] == stmca.a) {
            output += `a`
        } else if (splitMC[i] == stmca.b) {
            output += `b`
        } else if (splitMC[i] == stmca.c) {
            output += `c`
        } else if (splitMC[i] == stmca.d) {
            output += `d`
        } else if (splitMC[i] == stmca.e) {
            output += `e`
        } else if (splitMC[i] == stmca.f) {
            output += `f`
        } else if (splitMC[i] == stmca.g) {
            output += `g`
        } else if (splitMC[i] == stmca.h) {
            output += `h`
        } else if (splitMC[i] == stmca.i) {
            output += `i`
        } else if (splitMC[i] == stmca.j) {
            output += `j`
        } else if (splitMC[i] == stmca.k) {
            output += `k`
        } else if (splitMC[i] == stmca.l) {
            output += `l`
        } else if (splitMC[i] == stmca.m) {
            output += `m`
        } else if (splitMC[i] == stmca.n) {
            output += `n`
        } else if (splitMC[i] == stmca.o) {
            output += `o`
        } else if (splitMC[i] == stmca.p) {
            output += `p`
        } else if (splitMC[i] == stmca.q) {
            output += `q`
        } else if (splitMC[i] == stmca.r) {
            output += `r`
        } else if (splitMC[i] == stmca.s) {
            output += `s`
        } else if (splitMC[i] == stmca.t) {
            output += `t`
        } else if (splitMC[i] == stmca.u) {
            output += `u`
        } else if (splitMC[i] == stmca.v) {
            output += `v`
        } else if (splitMC[i] == stmca.w) {
            output += `w`
        } else if (splitMC[i] == stmca.x) {
            output += `x`
        } else if (splitMC[i] == stmca.y) {
            output += `y`
        } else if (splitMC[i] == stmca.z) {
            output += `z`
        } else if (splitMC[i] == stmca.specials.space) {
            output += ` `
        } else if (splitMC[i] == stmca.specials.period) {
            output += `.`
        } else if (splitMC[i] == stmca.specials.comma) {
            output += `,`
        } else if (splitMC[i] == stmca.specials.dash) {
            output += `-`
        } else if (splitMC[i] == stmca.specials.slash) {
            output += `/`
        } else if (splitMC[i] == stmca.specials.quote) {
            output += `"`
        } else if (splitMC[i] == stmca.specials.colon) {
            output += `:`
        } else if (splitMC[i] == stmca.specials.equal) {
            output += `=`
        } else if (splitMC[i] == stmca.specials.add) {
            output += `+`
        } else if (splitMC[i] == stmca.specials.oper) {
            output += `(`
        } else if (splitMC[i] == stmca.specials.cper) {
            output += `)`
        } else if (splitMC[i] == stmca.specials.ampersand) {
            output += `&`
        } else if (splitMC[i] == stmca.specials.at) {
            output += `@`
        } else if (splitMC[i] == stmca.numbers[0]) {
            output += `0`
        } else if (splitMC[i] == stmca.numbers[1]) {
            output += `1`
        } else if (splitMC[i] == stmca.numbers[2]) {
            output += `2`
        } else if (splitMC[i] == stmca.numbers[3]) {
            output += `3`
        } else if (splitMC[i] == stmca.numbers[4]) {
            output += `4`
        } else if (splitMC[i] == stmca.numbers[5]) {
            output += `5`
        } else if (splitMC[i] == stmca.numbers[6]) {
            output += `6`
        } else if (splitMC[i] == stmca.numbers[7]) {
            output += `7`
        } else if (splitMC[i] == stmca.numbers[8]) {
            output += `8`
        } else if (splitMC[i] == stmca.numbers[9]) {
            output += `9`
        }
    }
    return output;
}