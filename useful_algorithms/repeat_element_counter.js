const fruits = ['banana', 'apple', 'orange', 'orange', 'apple'];

let count = fruits.reduce((acc, cur) => {
  // 첫 번째 순회시 acc는 초기값인 {} 이고, cur은 첫 번째 요소인 'banana'이다
  // 초기값으로 전달받은 빈 객체에 요소값인 cur을 프로퍼티 키로, 요소의 개수를 프로퍼티 값으로 할당
  // 만약 프로퍼티 값이 undefined(처음 등장하는 요소)이면, 프로퍼티 값을 1로 초기화한다
  acc[cur] = (acc[cur] || 0) + 1;
  return acc;
}, {});

// 콜백 함수는 총 5번 호출되고 다음과 같이 결과값을 반환한다
/* 
{banana: 1} => {banana: 1, apple: 1} => {banana: 1, apple: 1, orange: 1}
=> {banana:1, apple: 1, orange: 2} => {banana: 1, apple: 2, orange: 2}
*/

console.log(count); // {banana: 1, apple: 2, orange: 2}

console.log('-----------');

const board = ['이호준', '이호준', '이호준', '김은하', '김은하', '이준근'];

// 문제 1 : 몇 명이 게시판에 게시물을 썼나요?
let set = new Set(board);
console.log(set.size);
// 문제 2 : 각각 몇 개의 게시물을 작성하였나요?
for (const i of set) {
  console.log(i, board.filter((el) => el === i).length);
}
