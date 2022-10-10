function solution(n) {
  var answer = 0;
  if (n % 2 === 0) {
    var lastNumber = n / 2;
    for (let i = lastNumber; i >= 0; i--) {
      answer += i;
    }
  } else if (n % 3 === 0) {
    var lastNumber = (n - 1) / 2;
    for (let j = lastNumber; j >= 0; j--) {
      answer += j;
    }
  }
  return answer * 2;
}
