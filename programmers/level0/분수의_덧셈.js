// 최대 공약수 구하기 알고리즘
function gcd(denum, num) {
  var remainder = 1;
  if (denum % num === 0) {
    return (remainder = num);
  } else {
    while (denum % num !== 0) {
      remainder = denum % num;
      denum = num;
      num = remainder;
    }
    return remainder;
  }
}

function solution(denum1, num1, denum2, num2) {
  var answer = [];
  var denum = denum1 * num2 + denum2 * num1;
  var num = num1 * num2;

  answer[0] = denum / gcd(denum, num);
  answer[1] = num / gcd(denum, num);

  return answer;
}
