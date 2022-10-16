function solution(n) {
  var answer = [];
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      answer.push(i);
      if (n / i !== i) answer.push(n / i);
    }
  }
  answer.sort((a, b) => a - b);
  return answer;
}

/* 
예시

100 / 1 = 100 (1, 100 배열에 추가)
100 / 2 = 50 (2, 50 배열에 추가)
100 / 3 (나머지가 0이 아니라서 다음 번호로 넘어감)
100 / 4 = 25 (4, 25 배열에 추가)
100 / 5 = 20 (5, 20 배열에 추가)
100 / 10 = 10 (i값인 10만 배열에 추가)
*/
