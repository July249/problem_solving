// function solution(s) {
//   const arr = [...s.toLowerCase()];
//   const countP = arr.filter((el) => el === 'p').length;
//   const countY = arr.filter((el) => el === 'y').length;
//   return countP === countY ? true : false;
// }

// console.log(solution('pPoooyY'));

function numPY(s) {
  return (
    s.toLowerCase().split('p').length === s.toLowerCase().split('y').length
  );
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(numPY('pPoooyY'));
console.log(numPY('Pyy'));
