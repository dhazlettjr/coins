/*
  Input: 0.67
  Output:
  {
    quarters: 2,
    dimes: 1,
    nickels: 1,
    pennies: 2
  }

*/

let quarter = 25;
let dime = 10;
let nickle = 5;
let penny = 1;
let remainder ;


function coinCounter (insert) {
    insert = insert*100;
    // coinCounter value 
    // Initialize a JavaScript object to hold the coins
    var coinPurse = {};
    
    coinPurse.quarters = Math.floor(insert/quarter);
    remainder = insert%quarter;
    coinPurse.dimes = Math.floor(remainder/dime);
    remainder = remainder%dime;
    coinPurse.nickles = Math.floor(remainder/nickle);
    remainder = remainder%nickle;
    coinPurse.pennies = Math.floor(remainder/penny);
  
    return coinPurse;
  }
  
  var coins = coinCounter(25.73);
  console.log(coins);