// Valores primitivos
let a = 1;
let b = a;

console.log(a, b); // 1

b += 1;

console.log(a, b);

// Valores por referencia
// Utilizando igual
let car = {
    color: 'red',
    year: 2019,
    km: 0,
};

let newCar = car;

// Son iguales
console.log(car, newCar);

// Utilizando Object.assign()
newCar.year = 2000;

// Cambió el valor en ambos objetos
console.log(car, newCar);

let newCarObject = Object.assign({}, car);

newCarObject.km = 10;

// Solamente cambió el valor del km en el newCarObject
console.log(car, newCar, newCarObject);

// Utilizando Object.assign() con un objeto de dos niveles
let carWithTwoLevels = {
    car: {
        color: 'red',
        year: 2020,
        km: 10,
        owner: {
            name: 'Rubén',
            age: 25,
        },
    },
};

let newCarWithTwoLevels = Object.assign(carWithTwoLevels);

newCarWithTwoLevels.car.color = 'blue';
newCarWithTwoLevels.car.owner.age = 30;

// Cambió el valor age del owner en ambos objetos
console.log(carWithTwoLevels, newCarWithTwoLevels);

// Utilizando JSON.strignify y JSON.parse
let newJsonCarWithTwoLevels = JSON.parse(JSON.stringify(carWithTwoLevels));

newJsonCarWithTwoLevels.car.color = 'black';
newJsonCarWithTwoLevels.car.owner.age = 35;

// Solamente se cambiarlos los valores en el newJsonCarWithTwoLevels
console.log(carWithTwoLevels, newJsonCarWithTwoLevels);
