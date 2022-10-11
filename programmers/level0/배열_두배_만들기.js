// ed. 2022-10-11
// 스프레드 문법 활용
function solution(numbers) {
  var answer = [...numbers].map((number) => number * 2);
  return answer;
}

// push 메서드 사용
/* function solution(numbers) {
  var answer = [];
  numbers.forEach((number) => answer.push(number * 2));
  return answer;
} */
