const compose = (...functions) => data =>
  functions.reduceRight((value, func) => func(value), data)

let description = $('#description');
let cabs = $('#carbs');
let calories = $('#calories');
let protein = $('#protein');
