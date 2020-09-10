const buildSum = a => b => a + b;

const tag = t => content => `<${t}>${content}</${t}>`;


function sumThreeNumbers(a, b, c) {
    return a + b + c;
}

console.log(sumThreeNumbers(1, 2, 3)); // 6

function sumThreeNumbersWithCurrying(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        }
    }
}

console.log(sumThreeNumbersWithCurrying(1)(2)(3)); // 6
