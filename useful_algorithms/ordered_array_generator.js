let array1 = Array.from({ length: 10 }, (_, idx) => idx);
let array2 = Array(10)
  .fill(0)
  .map((value, index) => value + index);

console.log(array1); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(array2); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
