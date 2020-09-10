// Sintaxis convencional
function buildSum(a) {
    return function (b) {
        return a + b;
    }
}

const addFive = buildSum(5);
console.log(addFive(5));

// Sintaxis con ArrowFunction
const arrowBuildSum = a => b => a + b;

const arrowAddFive = arrowBuildSum(5);
console.log(arrowAddFive(5));
