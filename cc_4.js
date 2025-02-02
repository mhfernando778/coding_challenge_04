// Task 1 - Customer Discounts //

let purchaseAmount = 500; // declaring purchase amount to be 500
if (purchaseAmount > 100) {
    console.log("Apply Discount");
} // applying a discount if amount is greater than 100

console.log(purchaseAmount); // logging the purchase amount and whether a discount applies

// Task 2 - Sales Report //
let sales = [100, 50, 120, 200, 150];
console.log("Sales:", sales);

let totalSales = 0;

for (let i = 0; i < sales.length; i++) {
    totalSales += sales[i];
}

console.log("Total Sales:", totalSales);