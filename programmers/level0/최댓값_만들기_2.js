// [음수, 음수, ... , 양수, 양수]
// [음수, 양수, ... , 양수, 양수]
// 등 sort를 통해서 맨 앞의 두번째와 맨 뒤의 두번째를 이용하여 대소비교 후 반환 값을 비교하여 전달하는 방법임
function solution(numbers) {
  numbers = numbers.sort((a, b) => a - b);
  return numbers.at(0) * numbers.at(1) > numbers.at(-1) * numbers.at(-2)
    ? numbers.at(0) * numbers.at(1)
    : numbers.at(-1) * numbers.at(-2);
}

/* 대엽님 코드 */
// 타임, 메모리 어택이 없으면 최소값은 무조건 infinify
// 최대값은 무조건 - infinity 로 설정
/* function solution(numbers) {
  let result = -Infinity;
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (result < numbers[i] * numbers[j]) {
        result = numbers[i] * numbers[j];
      }
    }
  }
} */

/* 테스트 8, 테스트 9 통과 못한 풀이 */
/* function solution(numbers) {
  const resultArr = [];
  for (let i of numbers) {
    for (let j of numbers) {
      if (i !== j && i < j) {
        resultArr.push(i * j);
      }
    }
  }
  return Math.max(...resultArr.sort((a, b) => a - b));
} */

console.log(solution([1, 2, -3, 4, -5])); // 15
console.log(solution([0, -31, 24, 10, 1, 9])); // 240
console.log(solution([10, 20, 30, 5, 5, 20, 5])); // 600
console.log(solution([-1, 1])); // -1
console.log(solution([-500, 10])); // -5000
