/**
* @copyright GNU GENERAL PUBLIC LICENSE (v3)
*/

// String to binary
function stbi(string, num) {
    let output = ''
    if (num !== true) {
        const length = string.split('').length
        let i;
        for (i = 0; i < length; i++) {
            output += string.charCodeAt(i).toString(2) + " "
        }
        output = output.replace(/[ \t]+$/gmi, '')
    } else {
        output = parseInt(string,10).toString(2)
    }
    return output
}

// Binary to string
function bits(binary) {
    const length = binary.split(' ').length
    let i;
    let output = ''
    for (i = 0; i < length; i++) {
        const splitbi = binary.split(' ')
        const charcode = parseInt(splitbi[i], 2).toString(10)
        output += String.fromCharCode(charcode)
    }
    return output
}

// String to hex
function sth(string, num) {
    let output = ''
    if (num !== true) {
        const length = string.split('').length
        let i;
        for (i = 0; i < length; i++) {
            output += string.charCodeAt(i).toString(16) + " "
        }
        output = output.replace(/[ \t]+$/gmi, '')
    } else {
        output = parseInt(string,10).toString(16)
    }
    return output
}

// Hex to string
function hts(hex) {
    const length = hex.split(' ').length
    let i;
    let output = ''
    for (i = 0; i < length; i++) {
        const splith = hex.split(' ')
        const charcode = parseInt(splith[i], 16).toString(10)
        output += String.fromCharCode(charcode)
    }
    return output
}

// String to Base32
function stb32(string, num) {
    let output = ''
    if (num !== true) {
        const length = string.split('').length
        let i;
        for (i = 0; i < length; i++) {
            output += string.charCodeAt(i).toString(32) + " "
        }
        output = output.replace(/[ \t]+$/gmi, '')
    } else {
        output = parseInt(string,10).toString(32)
    }
    return output
}

// Base32 to string
function b32ts(b32) {
    const length = b32.split(' ').length
    let i;
    let output = ''
    for (i = 0; i < length; i++) {
        const splitb32 = b32.split(' ')
        const charcode = parseInt(splitb32[i], 32).toString(10)
        output += String.fromCharCode(charcode)
    }
    return output
}