const listCategoriesEl = document.querySelectorAll(".item");
console.log(`Number of categories:` , listCategoriesEl.length);

listCategoriesEl.forEach(el => {
    const titleTextEl = el.firstElementChild.textContent;
    console.log(`Category:  ${titleTextEl}`);

    const listItemEl = el.lastElementChild.children.length;
    console.log(`Elements: ${listItemEl}`);
})