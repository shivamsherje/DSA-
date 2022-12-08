// Description

// You are given a number, stored in a variable with the namenum.
//  Find out the average of sum of all prime numbers in the range of [1,num],
//  including the value stored in num

// Output
// Print thefloor value of average of sumof all prime numbers in the range of[1,num],
// including num itself

// Sample Input

// 13
// Sample Output

// 6

let num = 13;
function averagesOfPrime(num) {
  let count = 0;
  let sum = 0;

  for (let i = 1; i <= num; i++) {
    let fact = 0;

    for (let j = 1; j <= num; j++) {
      if (i % j === 0) {
        fact++;
      }
    }
    if (fact == 2) {
      sum = sum + i;
      count++;
    }
  }
  console.log(Math.floor(sum / count));
}

averagesOfPrime(num);
