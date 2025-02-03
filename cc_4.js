// Task 1 - Customer Discounts //
let purchaseAmount = 500; // declaring purchase amount to be 500
let discountedPurchase = purchaseAmount;

if (purchaseAmount > 100) {
    discountedPurchase = purchaseAmount * .95;
} // applying a discount if amount is greater than 100

console.log(`Final amount: ${discountedPurchase}`); // logging the purchase amount and whether a discount applies


// Task 2 - Sales Report //
let sales = [100, 50, 120, 200, 150]; // declaring a sales array with 5 different numbers
console.log("Sales:", sales); // logging the sales array

let totalSales = 0;

for (let i = 0; i < sales.length; i++) {
    totalSales += sales[i];
} // creating a for loop to add the sales numbers together

console.log(`Total Sales: ${totalSales}`); // logging the total amount of sales


// Task 3 - Inventory Depletion //
let stock = 10; // declaring a stock amount of 10

while (stock > 0) {
    console.log("Stock count:", stock);
    stock--;
} // creating a loop to decrease the stock

console.log(`Depleting Stock: ${stock}`); // logging the decrement of the stock


// Task 4 Customer Survey //
let responses = 0; // declaring a response with an initial value of 0

do {
    console.log(`response collection: ${responses}`);
    responses++;
} while (responses < 3);

console.log(`Final Response: ${responses}`); //logging the countdown if responses


// Task 5 - Employee Information //
let employee = { name: "Alice", position: "Manager", salary: 75000}; // Declaring an object with the provided properties

for (let key in employee) {
    console.log(`${key}: ${employee[key]}`); // logging the iterations of the object
}


// Task 6 - Product Listings //
let products = ["Laptop", "PS5", "Toy"]; // declaring an array of at least 3 products

for (let product of products) {
    console.log(`Product: ${product}`); //logging loop to display products
}


// Task 7 - Order Processing //
let orders = [101, 102, 103]; // declaring an array of order IDs

orders.forEach(orderID => console.log(orderID)); // logging the order IDs with the forEach method


// Task 8 - Tax Calculation //

function calculateTax(amount, taxRate) { // declaring a function to calculate tax
    return amount * taxRate; // multiplying amount by a given tax rate
}

let tax = calculateTax(1000, .10); // declaring the values for amount and taxRate
console.log(`Calculated Tax: ${tax}`); // logging the calculated tax


// Task 9 - Discount Application //

const applyDiscount = function(amount, discountPercent) { //declaring a function to apply a discount
    return amount - (amount * discountPercent); // subtracting the calcuated discount from the initial amount
};

let discountedPrice = applyDiscount(1000, .10); // declaring the values to use to calculate the applied discount
console.log(`Discounted Price: ${discountedPrice}`); //  logging the discounted amount


// Task 10 - Loyalty Points //
const calculatePoints = (purchaseAmount, amountPerPoint) => purchaseAmount / amountPerPoint; // declaring the components to calculate points

console.log(`Points Earned: ${calculatePoints(150, 10)}`); // logging the amount of points earned with the given values