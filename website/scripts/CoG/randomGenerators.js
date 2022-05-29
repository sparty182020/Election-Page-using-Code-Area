/**
* @copyright GNU GENERAL PUBLIC LICENSE (v3)
*/

class RandomGenerators {
    static ranNum(max) {
        if (max < 1) {
            throw new RangeError('Max must be at least 1');
        }
        const num = Math.round(Math.random() * max);
        return num;
    }

    static bRanNum(amount,max) {
        if (amount <= 1 || max <= 1) {
            throw new RangeError("Number must be greater than 1")
        }
        let bnum = "s"
        for (let index = 0; index < amount; index++) {
            const num = ranNum(max)
            bnum += `.${num}`
        }
        return bnum.split('s.').join('').split('.')
    }
    
    // Random Hex Generator
    static randHex(prefix) {
        if (prefix == undefined) {
            return `${Math.floor(Math.random()*Math.pow(16,6)).toString(16)}`
        } else {
            return `${prefix}${Math.floor(Math.random()*Math.pow(16,6)).toString(16)}`
        }
    }
    
    // Bulk Hex Generator
    static bRandHex(amount,prefix) {
        if (amount <= 1) {
            throw new RangeError('Amount must be greator than one')
        }
        let hexRaw = 's'
        for (let index = 0; index < amount; index++) {
            const hex = randHex(prefix)
            hexRaw += `.${hex}`
        }
        return hexRaw.split('s.').join('').split('.')
    }
    
    static customNumberGenerator(min,max) {
        // Bug Check
        if (max <= 0 || min <= 0) {
            throw new RangeError("Values need to be above 0")
        }
        if (min >= max) {
            throw new RangeError("Min must be less than max")
        }
        if (max > Math.pow(10,6)) {
            throw new RangeError(`Max must be less than ${Math.pow(10,6)}`)
        }
        min = Number(min)
        max = Number(max)
        const fmax = max - min
        const random = Math.round(Math.random()*fmax) + min
        return random
    }
}