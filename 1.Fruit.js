function fruit(type, weight, price) {
let totalMoney = (weight/1000)*price;
    console.log(`I need ${totalMoney.toFixed(2)} to buy ${(weight/1000).toFixed(2)} kilograms ${type}.`);
}
fruit('apple', 1563, 2.35);
