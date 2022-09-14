// Miso - Coding Test

// Demo Test
/* 
주어진 배열에 있는 숫자들을 제외한 가장 작은 양의 정수를 반환하라

- [1, 3, 6, 4, 1, 2] >> return 5
- [31, 32, 34] >> return 1
- [1, 2, 3] return 4
- [-1, -3] return 1
*/

/*
주어진 배열을 오름차순으로 만든다
주어진 배열의 중복 요소를 제거한다
각 요소를 테스트한다
- 1. 0보다 큰 값이 배열 안에 없으면 1을 반환
- 2. 배열에 1이 없으면 1을 반환
- 2. 0보다 큰 값이 있으면 변수
*/
function solution(arr) {
  const set = new Set(arr);
  const uniqueArr = [...set].sort((a, b) => a - b);
  let result = 0;
  let sum = 0;

  // 0보다 큰 값이 배열 안에 없으면 1을 반환
  for (const item of arr) {
    if (item) {
      sum += item;
    }
  }
  if (sum < 0) {
    return 1;
  }

  // 배열에 1이 없으면 1을 반환
  if (!set.has(1)) {
    return 1;
  }

  let total = 0;
  const testArr = new Array(uniqueArr.length);
  for (let i = 0; i < testArr.length; i += 1) {
    testArr[i] = i + 1;
  }

  for (let j = 0; j < testArr.length; j += 1) {
    total += testArr[j];
  }
  if (sum > total) {
    result = uniqueArr.filter((x) => !testArr.includes(x));
    return result;
  }

  return result;
}

console.log(solution([1, 3, 6, 4, 1, 2]));
