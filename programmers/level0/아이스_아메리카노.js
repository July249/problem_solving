function solution(money) {
  var answer = [];
  answer[0] = Math.floor(money / 5500);
  answer[1] = money - answer[0] * 5500;
  return answer;
}

/* function solution(money) {
  var answer = [];
  var numOfCoffee = Math.floor(money / 5500);
  var change = money - numOfCoffee * 5500;
  answer[0] = numOfCoffee;
  answer[1] = change;
  return answer;
} */

console.log(solution(5500)); // [1, 0]
console.log(solution(15000)); // [2, 4000]
