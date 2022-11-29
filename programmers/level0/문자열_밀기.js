// 일반 숫자 정렬
// [10, 20, 30, 40, 32, 35, 37].sort((a, b) => a - b)
/*
  [
    // 어떠한 값 기준 정렬
    (10, 20, 30, 40, 32, 35, 37)
  ].sort((a, b) => Math.abs(a - 35) - Math.abs(b - 35))
*/
/*
  [
    // 어떠한 값 기준 정렬, 값이 같을 때에는 뒤에 ||
    (10, 20, 30, 40, 32, 35, 37)
  ].sort((a, b) => Math.abs(a - 35) - Math.abs(b - 35) || b - a);
*/
// function solution(numlist, n) {
//   return numlist.sort((a, b) => Math.abs(a - n) - Math.abs(b - n) || b - a);
// }

// slice나 for이용하면 어렵게 풀게 됩니다.
console.log(('elloh' + 'elloh').indexOf('hello'));
console.log(('hello' + 'hello').indexOf('hello'));
console.log(('ohell' + 'ohell').indexOf('hello'));
console.log(('lohel' + 'lohel').indexOf('hello'));

// function solution(A, B) {
//   return (B + B).indexOf(A);
// }

let solution = (A, B) => (B + B).indexOf(A);

// 회전 초밥 문제 처럼 몇 번씩 순회를 돌아야 하고, 중간에 먹는 초밥이 사라진다라고 하면 for를 이용합니다.
// 아래와 같이 for 문 안에 length가 줄어드는 것을 '이용'하셔야 합니다.
// l = [10, 20, 30, 40, 50];
// for (let i = 0; i < l.length; i++) {
//   console.log(l.pop());
// }
