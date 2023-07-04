// The Spread Operator

// old way
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

//with spread operator

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);
console.log(1, 2, 7, 8, 9)

const newMenu = [...restaurant.mainMenu, 'Gnocchi'];
console.log(newMenu);

// Copy array

const mainMenuCopy = [...restaurant.mainMenu]; // a shallow copy of this array

// Join 2 arrays together
const menu = [...restaurant.mainMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets, but NOT objects
// because strings are also iterables we can use spread operator on a string
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);

