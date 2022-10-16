function factorial(i) {
  if (i <= 1) {
    return 1;
  }
  return factorial(i - 1) * i;
}

function solution(n) {
  let answer = 0;
  let j = 1;
  while (factorial(j) < n) {
    j += 1;
  }
  if (factorial(j) <= n) {
    answer = j;
  } else {
    answer = j - 1;
  }
  return answer;
}

console.log(solution(7)); // 3
