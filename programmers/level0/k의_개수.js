function solution(i, j, k) {
  let answer = 0;
  const numbers = [];
  let splitedArr = [];
  const startNum = i;
  const endNum = j;
  for (let l = startNum; l <= endNum; l++) {
    numbers.push(String(l));
  }
  numbers.forEach((val) => {
    if (val > 9) {
      splitedArr.push(val.split(''));
    } else {
      splitedArr.push(val);
    }
  });
  const testArr = splitedArr.flat(Infinity);
  for (let m = 0; m < testArr.length; m++) {
    if (testArr[m] === String(k)) {
      answer += 1;
    }
  }
  return answer;
}

console.log(solution(1, 13, 1)); // 6
console.log(solution(10, 50, 5)); // 5
console.log(solution(3, 10, 2)); // 0
