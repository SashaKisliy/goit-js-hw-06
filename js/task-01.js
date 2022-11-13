const categoriesEl = document.querySelector('#categories');
const itemsEl = categoriesEl.querySelectorAll('.item');

console.log(`Number of categories: ${itemsEl.length}`);

itemsEl.forEach((item) => {
    const nameItem = item.querySelector('h2').textContent;
    console.log(`Category: ${nameItem}`);
    const lengthItem = item.querySelectorAll('li');
    console.log(`Elements: ${lengthItem.length}`)
});