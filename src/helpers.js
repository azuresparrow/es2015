const choice = (items) => {
    return items[Math.floor(Math.random()*items.length)];
}
const remove = (item, items) => {
    const index = items.indexOf(item);
    items.splice(index, 1);
    return items
}

export {choice, remove}