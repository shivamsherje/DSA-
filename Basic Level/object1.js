let str = "bbbbaman";
function object1(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]] == undefined) obj[str[i]] = 1;
    else obj[str[i]]++;
  }
  for (key in obj) {
    console.log(key + "-" + obj[key]);
  }
}
object1(str);
