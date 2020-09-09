
// SharedState en la variable a el cual tiene el valor compartido de manera
// global para ambas funciones
const a = {
    value: 2,
};

const addOne = () => a.value += 1;

const timesTwo = () => a.value *= 2;

addOne();
timesTwo();

// Las funciones modificarón directamente la propiedad value del objeto a
console.log(a.value); // 6

timesTwo();
addOne();

// Las funciones modificarón directamente la propiedad value del objeto a y el
// orden de ejecución influye en el resultado
console.log(a.value); // 13

// Enfoque con funciones puras
const b = {
    value: 2,
};

const addOneWithoutSharedState = b => Object.assign({}, b, {value: b.value + 1});

const timesTwoWithoutSharedState = b => Object.assign({}, b, {value: b.value * 2});

// Las funciones puras están afectando directamente a la propiedad value del
// objeto b, se aplica la característica inmutabilidad

addOneWithoutSharedState(b);
timesTwoWithoutSharedState(b);

console.log(addOneWithoutSharedState(b));
console.log(timesTwoWithoutSharedState(b));
