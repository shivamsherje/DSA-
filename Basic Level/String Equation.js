
// Description

// You are given a string stored in a variable with the namestr,
//  containing a mix of upper case and lower case English characters

// The length of the string is stored in stored in a variable with the name N

// You have to solve the equation5*x + 3*y, wherexis the number of small case English 
// characters in the string,

// whileyis the number of upper case English characters in the string

// For example, consider the value stored inN = 5, andstr = AmanZ

// The number of upper case characters in the string is 2 -A, Z, and the number of
//  small case characters in the string is 3 -m,a,n

// Therefore, the value of the equation5*x + 3*y, becomes5*3 + 3*2 = 21, which is the 
// required answer

// Sample Input 1 

// 5
// AmanZ
// Sample Output 1

// 21


let n = 5;
let str = "AzmaN";
function StringEquation(n, str) {
  let lowercase = "abcdefghijklmnopqrstuvwxyz";
  let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let a = 0;
  let b = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < lowercase.length; j++) {
      if (str[i] == lowercase[j]) {
        a++;
      }
    }

    for (let j = 0; j < uppercase.length; j++) {
      if (str[i] == uppercase[j]) {
        b++;
      }
    }
  }
  console.log(a * 5 + b * 3);
}

StringEquation(n, str);
