let arr = [
    "Java",
    "JavaScript",
    "C++",
    "C#",
    "Python",
    "Go",
    "TypeScript",
    "Kotlin",
    "Delphi",
    "PHP",
  ];
  let accumulator = [];
  let i = 0;
  while (i < arr.length) {
      if (arr[i].length > 3) {
        accumulator.push(arr[i])
      }
    i++
  }
  console.log(accumulator)