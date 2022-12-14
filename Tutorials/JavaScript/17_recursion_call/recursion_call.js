// 재귀 함수
/* 
- 재귀함수는 자기 자신을 호출하는 함수를 말한다
  ㄴ 자기 자신을 호출하는 것을 재귀 호출(recursion call)이라고 한다
- 함수 호출은 call stack에 쌓이기 때문에 스택 자료구조와 유사하게 동작한다
- 함수형 프로그래밍에선 루프 구현을 재귀로 구현하는 경우가 많다
- 잘못 작성하면 무한 루프에 빠질 수 있다
*/

// 자바스크립트에서 재귀함수
/* 
- 콜 스택에 제한이 있다
  ㄴ 자바스크립트 엔진마다 제한 수는 다르다
  ㄴ 따라서 브라우저마다 다르지만 크롬의 경우 약 1만개 이다
- 꼬리 재귀 (tail recursion)가 제공되지 않는다
- 성능이 나쁘다
*/

// 재귀로 구현해야 편한 알고리즘
/* 
- Union-Find
- DFS
- Back-tracking
- 불편함을 무시한다면 더 빠른 성능으로 (js에서) 작성가능하나 코테는 빨리 푸는 것이 중요하기에 비추
*/

// 재귀 호출
/* function recursion(a) {
  // Bad
  // 탈출 코드가 없으면 무한 루프에 빠진다
  // return recursion(a + 1);

  // Good
  // 무한 루프 방지를 위한 탈출 코드
  if (a > 10) {
    return a;
  }

  return recursion(a + 1);
}

console.log(recursion(5)); // 11 */

// 피보나치 수열
// 앞 두 항의 합이 뒤 항의 값이 되는 수열
// 1 1 2 3 5 8 13
/* function fibonacci(x) {
  if (x <= 2) {
    return 1;
  }
  return fibonacci(x - 1) + fibonacci(x - 2);
}

console.log(fibonacci(7)); // 13 */

// 변수 없는 합병 정렬 구현
// 결합
const merge = (a, b) => {
  if (a.length === 0) return b;
  else if (b.length === 0) return a;
  else if (a[0] < b[0]) return [a[0], ...merge(a.slice(1), b)];
  else return [b[0], ...merge(a, b.slice(1))];
};

// 분해
const mergesort = (arr) => {
  if (arr.length < 2) return arr;
  else {
    const mid = Math.floor(arr.length / 2);
    return merge(mergesort(arr.slice(0, mid)), mergesort(arr.slice(mid)));
  }
};

console.log(mergesort([21, 10, 12, 20, 25, 13, 15, 22]));
// [10, 12, 13, 15, 20, 21, 22, 25]
