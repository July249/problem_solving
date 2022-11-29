function solution(dartResult) {
  let answer = [];
  let result = 0;
  let temp = 0;

  for (let i = 0; i < dartResult.length; i++) {
    if (dartResult[i] >= 0 && dartResult[i] <= 9) {
      if (dartResult[i] == 1 && dartResult[i + 1] == 0) {
        temp = 10;
        // continue
        i++;
      } else {
        temp = parseInt(dartResult[i]);
      }
    } else if (dartResult[i] == 'S') {
      answer.push(temp);
    } else if (dartResult[i] == 'D') {
      answer.push(temp ** 2);
    } else if (dartResult[i] == 'T') {
      answer.push(temp ** 3);
    } else if (dartResult[i] == '*') {
      answer[answer.length - 1] *= 2;
      answer[answer.length - 2] *= 2;
    } else if (dartResult[i] == '#') {
      answer[answer.length - 1] *= -1;
    }
  }
  for (const value of answer) {
    result += value;
  }
  return result;
}

/* function solution(dartResult) {
  let answer = [];
  let result = 0;
  answer = dartResult.match(/([0-9]|10)([SDT])([\*\#]?)/g);

  for (const value of answer) {
    result += value;
  }

  return result;
} */

/* 
S => ^1
D => ^2
* => *2 (누적점수에 대해 2배)
T => ^3
# => -1 (해당점수만 -1배)
*/

console.log(solution('1S2D*3T')); // 37
// (1**1 + 2**2) * 2 + 3**3
console.log(solution('1D2S#10S')); // 9
// 1**2 + 2**1 * (-1) + 10**1
console.log(solution('1D2S0T')); // 3
// 1**2 + 2**1 + 0**3
console.log(solution('1S*2T*3S')); // 23
// 1**1 * 2 * 2 + 2**3 * 2 + 3**1
console.log(solution('1D#2S*3S')); // 5
// 1**2 * (-1) * 2 + 2**1 * 2 + 3**1
console.log(solution('1T2D3D#')); // -4
// 1**3 + 2**2 + 3**2 * (-1)
console.log(solution('1D2S3T*')); // 59
// 1**2 + 2**1 * 2 + 3**3 * 2
