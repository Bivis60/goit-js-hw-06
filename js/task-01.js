const liItemLength = document.querySelectorAll('.item');
console.log('Number of categories:', liItemLength.length);
liItemLength.forEach(element => {
    const title = element.querySelector('h2').textContent;
    console.log(`Category: ${title}`);
    const total = element.querySelectorAll('li').length;
    console.log(`Elements: ${total}`); 
});


