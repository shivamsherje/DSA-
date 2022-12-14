function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let temp = 0;
      if (arr[j] < arr[i]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
    
  }
  let bag = "";
  for (let i = 0; i < arr.length; i++) {
    bag = bag + arr[i] + " ";
  }
  console.log(bag);
}
selectionSort([3, 5, 0, 9, 8]);
