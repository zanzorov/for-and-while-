let arr = [5, 4, 9, 25, 67, 88, 99, 41, 31, 44];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) {
    console.log(arr[i]);
  }
}

let i = 0;
while (i < arr.length) {
  if (arr[i] % 2 !== 0) {
    console.log(arr[i]);
  }
  i++;
}
