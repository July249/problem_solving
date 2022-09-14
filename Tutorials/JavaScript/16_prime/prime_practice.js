// 소수 찾기

// [문제 설명]
// 1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요
// 소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다. (1은 소수가 아님)

// My Solution (=== Answer Sheet)
function solution(n) {
  const prime = [false, false, ...Array(n - 1).fill(true)];

  // 에리토스테네스의 체 알고리즘
  for (let i = 2; i * i <= n; i += 1) {
    if (prime[i]) {
      for (let j = 2; j * i <= n; j += 1) {
        prime[j * i] = false;
      }
    }
  }

  return prime.filter(Boolean).length;
}
