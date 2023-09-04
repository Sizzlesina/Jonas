/** @format */

// Exporting module
console.log("Exporting module");

const shippingCost = 10;
export const cart = [];

export const addToCart = function (product, quantity) {
  cart.push(product, quantity);
  console.log(`${quantity} ${product} added to the cart`);
};

const totalPrice = 237;
const totalQuantity = 23;

// we can export the element that we want we want but with the name that we choose for it (We can change the name)
export {totalPrice,totalQuantity as tq}


// we use the default export when we want to export one thing per module
export default function (product, quantity) {
  cart.push(product, quantity);
  console.log(`${quantity} ${product} added to the cart`);
};