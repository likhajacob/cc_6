// Task 1
// Function to calculate total profit
function calculateProfit(costPrice, sellingPrice, unitsSold) {
    //finfing profit by substracting the cost price from the selling price and multiplting by units sold
    let profit = (sellingPrice - costPrice) * unitsSold;
    
    // returning the calculated profit
    return profit;

};
// Test cases
// Logging the total profit for 100 units with the cost price as 20 and the selling price as 30 in the console
console.log(`Total profit: $${calculateProfit(20, 30, 100)}`);

//Logging the total profit for 200 units with the cost price as 50 and the selling price as 70 in the console
console.log(`Total profit: $${calculateProfit(50, 70, 200)}`);
