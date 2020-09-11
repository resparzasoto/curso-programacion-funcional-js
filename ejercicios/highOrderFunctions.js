const array1 = [1, 2, 3];
const array2 = [];

for (let i = 0; i < array1.length; i++) {
    array2.push(array1[i] * 2);
}

console.log(array2); // [2, 4, 6]

const array3 = array1.map(n => n * 4);

console.log(array3); // [4, 8, 12]
