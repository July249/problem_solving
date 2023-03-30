## 1. 소수 구하기 (에라토스테네스의 체)

```js
// 에라토스테네스의 체
// O(n log log n)
function get_primes(num) {
  const prime = [false, false, ...Array(num - 1).fill(true)]; // 0과 1은 소수가 아니기에 미리 false로 체크합니다.

  for (let i = 2; i * i <= num; i += 1) {
    if (prime[i]) {
      for (let j = i * 2; j <= num; j += i) {
        prime[j] = false;
      }
    }
  }

  return prime.filter(Boolean); // true만 필터링하고 싶을 경우 이런 방식으로 쓸 수 있습니다.
}

function solution(n) {
  return get_primes(n).length;
}
```

## 2. 재귀 함수

- 재귀로 구현해야 편한 알고리즘
  : union-find / dfs / backtracking

### 피보나치 수열
```js
function fibo(x) {
  if (x <= 2) {
    return 1;
  }
  return fibo(x - 1) + fibo(x - 2);
}

console.log(fibo(7)); // 13
```

### 순열

```js
function permutations(arr, n) {
  // 1개만 뽑는다면 그대로 순열을 반환한다. 탈출 조건으로도 사용된다.
  if (n === 1) return arr.map((v) => [v]);
  let result = [];

  // 요소를 순환한다
  arr.forEach((fixed, idx, arr) => {
    // 현재 index를 제외한 요소를 추출한다.
    // index번째는 선택된 요소
    const rest = arr.filter((_, index) => index !== idx);
    // 선택된 요소를 제외하고 재귀 호출한다.
    const perms = permutations(rest, n - 1);
    // 선택된 요소와 재귀 호출을 통해 구한 순열을 합쳐준다.
    const combine = perms.map((v) => [fixed, ...v]);
    // 결과 값을 추가한다.
    result.push(...combine);
  });

  // 결과 반환
  return result;
}
```

### 조합

```js
function combinations(arr, n) {
  // 1개만 뽑는다면 그대로 조합을 반환한다. 탈출 조건으로도 사용된다.
  if (n === 1) return arr.map((v) => [v]);
  const result = [];

  // 요소를 순환한다
  arr.forEach((fixed, idx, arr) => {
    // 현재 index 이후 요소를 추출한다.
    // index번째는 선택된 요소
    const rest = arr.slice(idx + 1);
    // 선택된 요소 이전 요소들을 제외하고 재귀 호출한다.
    const combis = combinations(rest, n - 1);
    // 선택된 요소와 재귀 호출을 통해 구한 조합을 합쳐준다.
    const combine = combis.map((v) => [fixed, ...v]);
    // 결과 값을 추가한다.
    result.push(...combine);
  });

  // 결과 반화
  return result;
}
```