function solution(array, n) {
  const distArr = [
    ...array.sort((a, b) => a - b).map((el) => Math.abs(el - n)),
  ];
  console.log(distArr);
  const indexOne = distArr.indexOf(Math.min(...distArr));
  const indexTwo = distArr.lastIndexOf(Math.min(...distArr));
  console.log(indexOne, indexTwo);
  if (indexOne !== indexTwo) {
    return array[indexOne];
  } else {
    return array[indexOne];
  }
}

function solution2(array, n) {
  array.sort((a, b) => a - b);
  let diff = Infinity;
  let idx = Infinity;
  for (let i in array) {
    let calc = Math.abs(n - array[i]);
    if (calc < diff) {
      diff = calc;
      idx = i;
    }
  }
  return array[idx];
}

console.log(solution([3, 10, 28], 20)); // 28
console.log(solution([10, 11, 12], 13)); // 12
console.log(solution([10, 12, 14], 13)); // 12
console.log(solution([-4, -3, -2, -1, 0, 1, 2, 3, 4], 0)); // 12

console.log(solution2([3, 10, 28], 20)); // 28
console.log(solution2([10, 11, 12], 13)); // 12
console.log(solution2([10, 12, 14], 13)); // 12
console.log(solution2([-4, -3, -2, -1, 0, 1, 2, 3, 4], 0)); // 12
