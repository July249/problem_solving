// function solution(N) {
//   const init = N.toString(2);
//   let resultArr = [];
//   let answerArr = [];
//   let startIndex = 1;
//   let endIndex = 2;
//   for (let i = 1; i <= init.length; i++) {
//     if (init[i] === '0' && init[i + 1] === '0') {
//       endIndex += 1;
//     } else if (init[i] === '0' && init[i + 1] === '1') {
//       endIndex = i + 1;
//       resultArr.push(init.slice(startIndex, endIndex));
//     } else if (init[i] === '1' && init[i + 1] === '0') {
//       startIndex = i + 1;
//     } else if (init[i] === '1' && init[i + 1] === '1') {
//       if (init[i + 2]) {
//         startIndex = i + 2;
//         endIndex = i + 3;
//       } else {
//         break;
//       }
//     }
//   }

//   for (let i of resultArr) {
//     answerArr.push(i.length);
//   }

//   return answerArr.length === 0 ? 0 : Math.max(...answerArr);
// }

// console.log(solution(37));

function solution(N) {
  let answer;
  let zerosArr = N.toString(2)
    .replace(/0$/gm, '_')
    .split('1')
    .filter((i) => !!i && !i.includes('_'));

  if (zerosArr.length === 0) {
    return 0;
  }

  for (let idx in zerosArr) {
    zerosArr[idx] = zerosArr[idx].length;
    if (zerosArr) {
      answer = Math.max(...zerosArr);
    } else if (zerosArr.length === 0 || typeof zerosArr === undefined) {
      answer = 0;
    }
  }

  return answer;
}

console.log(solution(1041)); // 10000010001 => 5
console.log(solution(15)); // 1111 => 0
console.log(solution(32)); // 100000 => 0
console.log(solution(33)); // 100001 => 4
console.log(solution(2)); // 10 => 0
console.log(solution(36)); // 100100 => 2
console.log(solution(137)); // 10001001 => 3
console.log(solution(1)); // 1 => 0
