// 최대 공약수 구하기 알고리즘
// 분자 = denum
// 분모 = num
// 분자, 분모의 최대 공약수를 구하여 더이상 나누어 떨어지지 않게 함
// 유클리드 알고리즘 이용
// cf. https://velog.io/@soyeon207/%EC%B5%9C%EB%8C%80%EA%B3%B5%EC%95%BD%EC%88%98GCD-%EC%B5%9C%EC%86%8C%EA%B3%B5%EB%B0%B0%EC%88%98LCM-%EA%B3%BC-%EC%9C%A0%ED%81%B4%EB%A6%AC%EB%93%9C-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98Euclidean-algorithm
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
// remainder가 최대공약수임

function solution(denum1, num1, denum2, num2) {
  var answer = [];
  var denum = denum1 * num2 + denum2 * num1;
  var num = num1 * num2;

  answer[0] = denum / gcd(denum, num);
  answer[1] = num / gcd(denum, num);

  return answer;
}

console.log(gcd(10, 6));
