let arr = [-5, -4, -6, 2, 7, 68, 12, 14, 52, 44];
let accumulator = 0;
let i = 0;
while (i < arr.length) {
  if (arr[i] > 0) {
    accumulator += arr[i];
  }
  i++;
}
console.log(accumulator);
