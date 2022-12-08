//find the  number is palindrome or not.

let num = 1001;
function reverseDigits(num) {
  let temp = num;

  let rev_num = 0;

  while (num > 0) {
    let rem = num % 10;
    // 2,2,3

    rev_num = rev_num * 10 + rem;
    //  2,22,223

    num = Math.floor(num / 10);
    // 32.2,3.2,0
  }
  console.log(rev_num);

  if (temp == rev_num) {
    console.log("its a palindrome ");
  } else {
    console.log("its not palindrome");
  }
}
reverseDigits(num);
