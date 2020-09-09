// Mutando argumentos
const addToList = (list, item, quantity) => {
  list.push({
      item,
      quantity,
  });

  return list;
};

// Sin mutar argumentos
const addToListInmutable = (list, item, quantity) => {
    const newList = JSON.parse(JSON.stringify(list));

    newList.push({
        item,
        quantity,
    });

    return newList;
};
