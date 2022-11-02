function solution(array, n) {
  let minValue = Infinity;
  let index = 0;
  const distArr = [...array.map((el) => Math.abs(el - n))];
  for (let i = 0; i < array.length; i++) {
    if (Math.min(...distArr) < minValue) {
      minValue = Math.min(...distArr);
    }
    index = distArr.indexOf(minValue);
  }
  const slicedArr = distArr.slice(index + 1);
  if (Math.min(...slicedArr) < minValue) {
    index = Math.min(...slicedArr);
  } else if (Math.min(...slicedArr) === minValue) {
    index = distArr.indexOf(minValue);
  }

  return array[index];
}

console.log(solution([3, 10, 28], 20)); // 28
console.log(solution([10, 11, 12], 13)); // 12
console.log(solution([10, 12, 14], 13)); // 12
