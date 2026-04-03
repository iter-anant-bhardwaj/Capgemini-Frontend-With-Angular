let store = {
  categories: [
    { type: "fruits", items: ["watermelon", "kiwi"] },
    { type: "veggies", items: ["potato", "beans"] },
    { type: "softdrinks", items: ["coke", "monster"] }
  ]
};


let allProducts = store.categories.flatMap(category => category.items);
console.log(allProducts);