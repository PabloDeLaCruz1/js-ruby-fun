const downsortEvenly = (array, count) => {
    let result = [];
    array = array.sort(function (a, b) {
        return b - a;
    })
    for (let x = 0; x <= array.length; x++) {
        if (result.length >= count) break;
        if (array[x] % 2 === 0) {
            result.push(array[x]);
        }
    }
    return result;
}

const downsortOddly = (array, count) => {
    let result = [];
    array = array.sort(function (a, b) {
        return b - a;
    })
    for (let x = 0; x <= array.length; x++) {
        if (result.length >= count) break;
        if (array[x] % 2 !== 0) {
            result.push(array[x]);
        }
    }
    return result;
}

// array = [2, 3, 14, 3, 9, 22]
// console.log(
//  downsortEvenly(array, 2)); // [22, 14]
// console.log(
//  downsortEvenly(array, 10)); // [22, 14, 2]

// console.log(
//     downsortOddly(array, 2)); // [9, 3]

const unpack = (array) => {
    return {
        strings: () => {
            let result = [];
            array.forEach(ele => {
                if (typeof ele === 'string') {
                    result.push(ele);
                }
            });
            return result
        },
        integers: () => {
            let result = [];
            array.forEach(ele => {
                if (typeof ele === 'number') {
                    result.push(ele);
                }
            });
            return result

        }
    }
}

literal = unpack(["hello", "world", 1, "cat", "dog", 4])
// console.log(literal.strings()); // ["hello", "world", "cat", "dog"]
console.log(literal.integers()); // [1, 4]