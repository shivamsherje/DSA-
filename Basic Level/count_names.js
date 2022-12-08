let N = 3;
let strings = ["masai", "school", "masai"];
function countNames(N, strings) {
  let str = strings.sort();
  var count = {};
  var bag = 0;
  for (i = 0; i < N; i++) {
    bag = str[i];
    count[bag] = count[bag] || 0;
    count[bag]++;
  }
  for (let i in count) {
    console.log(i, count[i]);
  }
}

countNames(N, strings);
