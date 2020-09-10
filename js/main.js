const compose = (...functions) => (data) =>
  functions.reduceRight((value, func) => func(value), data);

// {
//   tag: 'h1',
//   attr: {
//     class: 'title'
//   }
// }
// class="is-invalid"
const attrsToString = (obj = {}) => {
  const keys = Object.keys(obj);
  const attrs = [];

  for (let i = 0; i < keys.length; i++) {
    let attr = keys[i];
    attrs.push(`${attr}="${obj[attr]}"`);
  }

  const str = attrs.join('');

  return str;
}

// "tag="h1" class="title"
const tag = t => content => `<${t}>${content}</${t}>`;

console.log(tag('h1')('Title')); // <h1>Title</h1>

let description = $("#description");
let carbs = $("#carbs");
let calories = $("#calories");
let protein = $("#protein");

let list = [
  // {
  //   description: 'Manzana',
  //   calories: 10,
  //   carbs: 10,
  //   protein: 10,
  // },
  // {
  //   description: 'Manzana',
  //   calories: 10,
  //   carbs: 10,
  //   protein: 10,
  // },
  // {
  //   description: 'Manzana',
  //   calories: 10,
  //   carbs: 10,
  //   protein: 10,
  // },
  // {
  //   description: 'Manzana',
  //   calories: 10,
  //   carbs: 10,
  //   protein: 10,
  // },
  // {
  //   description: 'Manzana',
  //   calories: 10,
  //   carbs: 10,
  //   protein: 10,
  // },
];

description.keypress(() => {
  description.removeClass("is-invalid");
});
carbs.keypress(() => {
  carbs.removeClass("is-invalid");
});
calories.keypress(() => {
  calories.removeClass("is-invalid");
});
protein.keypress(() => {
  protein.removeClass("is-invalid");
});

const validateInputs = () => {
  description.val() ? "" : description.addClass("is-invalid");
  carbs.val() ? "" : carbs.addClass("is-invalid");
  calories.val() ? "" : calories.addClass("is-invalid");
  protein.val() ? "" : protein.addClass("is-invalid");

  if (description.val() && carbs.val() && calories.val() && protein.val()) {
    add();
    cleanInputs();
  }
};

const add = () => {
  const newItem = {
    description: description.val(),
    carbs: Number(carbs.val()),
    calories: Number(calories.val()),
    protein: Number(protein.val()),
  };

  list.push(newItem);
  console.log(list);
};

const cleanInputs = () => {
  description.val('');
  carbs.val('');
  calories.val('');
  protein.val('');
};
