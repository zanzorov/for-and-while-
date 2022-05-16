let arr = [
  "Khamzat",
  "Askhab",
  "Musa",
  "Mansur",
  "Deni",
  "Magomed",
  "Amirkhan",
  "Akhmad",
  "Ramzan",
  "Israil",
];
let accumulator = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i][0] == "A") {
    accumulator.push(arr[i]);
  }
}
console.log(accumulator);
