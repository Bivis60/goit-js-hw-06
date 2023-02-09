const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const makeList = elements => {
  return elements.map(element => {
  const liItem = document.createElement('li');
  liItem.classList.add('item');
  liItem.textContent = `${element}`;
   return liItem;
});
}
const list = makeList(ingredients);

const ulList = document.querySelector('#ingredients');
ulList.append(...list);