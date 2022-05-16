let arr = [5, 4, 9, 25, 67, 88, 99, 41, 31, 44];
let accumulatorEven = [];
let i = 0;
while (i < arr.length) {
  if (arr[i] % 2 == 0) {
    accumulatorEven.push(arr[i]);
  }
  i++;
}
console.log(accumulatorEven);
