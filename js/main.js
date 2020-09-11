const compose = (...functions) => (data) =>
  functions.reduceRight((value, func) => func(value), data);

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

const tagAttrs = obj => (content = '') =>
  `<${obj.tag}${obj.attrs ? ' ' : ''}${attrsToString(obj.attrs)}>${content}</${obj.tag}>`;

  console.log(tagAttrs({
    tag: 'h1',
    attrs: {
      class: 'title'
    }})('Title'));

const tag = t => {
  if (typeof t === 'string') {
    tagAttrs({ tag: t });
  } else {
    tagAttrs(t);
  }
}

const tableRowTag = tag('tr');
const tableCell = tag('td');

const tableCells = items => items.map(tableCell).join('');
const tableRow = items => compose(tableRowTag, tableCells)(items);
// const tableRow = items => tableRowTag(tableCells(items));

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
    updateTotals();
    console.log(list);
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

const updateTotals = () => {
  let calories = 0;
  let carbs = 0;
  let proteins = 0;

  list.map(item => {
    calories += item.calories;
    carbs += item.carbs;
    proteins += item.protein;
  });

  $('#totalCalories').text(calories);
  $('#totalCarbs').text(carbs);
  $('#totalProteins').text(proteins);
}

const cleanInputs = () => {
  description.val('');
  carbs.val('');
  calories.val('');
  protein.val('');
};
