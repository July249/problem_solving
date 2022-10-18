// Note: 약수 구하기 문제 참고
function solution(n) {
  var answer = 0;
  var pairArr = [];
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      pairArr.push(i);
      if (n / i !== i) pairArr.push(n / i);
    }
  }
  answer += pairArr.length;
  return answer;
}

console.log(solution(20));
console.log(solution(100));
