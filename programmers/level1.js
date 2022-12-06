// function solution(x, n) {
//   let arr = [];
//   for (let i = 0; i < n; i++) {
//     arr.push(x * (i + 1));
//   }
//   return arr;
// }

// console.log(solution(2, 5));
// console.log(solution(4, 3));
// console.log(solution(-4, 2));

// function solution(X, Y) {
//   let resultArr = [];
//   const sortedX = [...X].sort((a, b) => b - a);
//   const sortedY = [...Y].sort((a, b) => b - a);
//   let i = 0;
//   while (i < sortedX.length) {
//     for (let j of sortedY) {
//       if (sortedX[i] === j) {
//         if (i === 0 || resultArr[resultArr.length - 1] !== j) {
//           resultArr.push(j);
//         }
//       }
//     }
//     i += 1;
//   }

//   return resultArr;
// }

// console.log(solution('100', '2345')); // '-1'
// console.log(solution('100', '203045')); // '0'
// console.log(solution('100', '123450')); // '10'
// console.log(solution('12321', '42531')); // '321'
// console.log(solution('5525', '1255')); // '552'

function solution(d, budget) {
  let cost = 0;
  const arr = d.sort((a, b) => b - a);
  for (let i of arr) {
    if (budget > cost) {
      cost += i;
      let idx = arr.indexOf(i);
      arr.slice(idx, idx + 1);
    } else if (budget === cost) {
      return arr;
    }
  }
}

console.log(solution([1, 3, 2, 5, 4], 9)); // 3
console.log(solution([2, 2, 3, 3], 10)); // 4
