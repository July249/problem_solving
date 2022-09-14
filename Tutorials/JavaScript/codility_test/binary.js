/*
양의 정수 N 내의 이진 간격은 N의 이진 표현에서 양쪽 끝에서 1로 둘러싸인 연속 0의 최대 시퀀스입니다.
예를 들어, 숫자 9는 이진 표현 1001을 갖고 길이가 2인 이진 간격을 포함합니다. 숫자 529는 이진 표현이 1000010001이고 두 개의 이진 간격(길이 4 중 하나와 길이 3 중 하나)을 포함합니다. 숫자 20은 이진 표현 10100을 포함하고 다음을 포함합니다. 길이가 1인 하나의 이진 간격. 숫자 15는 이진 표현 1111을 가지며 이진 간격이 없습니다. 숫자 32는 이진 표현 100000을 가지며 이진 간격이 없습니다.
Write a function:

function solution(N);

양의 정수 N이 주어지면 가장 긴 이진 간격의 길이를 반환합니다. N에 이진 간격이 포함되지 않은 경우 함수는 0을 반환해야 합니다.

예를 들어, N = 1041이 주어지면 함수는 5를 반환해야 합니다. N은 이진 표현이 10000010001이고 가장 긴 이진 간격은 길이가 5이기 때문입니다. N = 32가 주어지면 함수는 0을 반환해야 합니다. N은 이진 표현이 '100000'이고 바이너리 갭이 없습니다.

다음 가정에 대한 효율적인 알고리즘을 작성하십시오.

N is an integer within the range [1..2,147,483,647].
*/

function clear(arr) {
  arr.length = 0;
  return arr;
}

function solution(N) {
  if (Number.isInteger(Math.log2(N))) {
    return 0;
  } else if (Number.isInteger(Math.log2(N + 1))) {
    return 0;
  } else if (Number.isInteger(Math.log2(N - 1))) {
    return Math.log2(N - 1) - 1;
  }

  let arr = [];
  let gap = [];
  let countZero = 0;

  let binaryNum = N.toString(2);

  for (let i = 0; i < binaryNum.length; i++) {
    if (binaryNum[i] === '1') {
      if (binaryNum[i + 1] === '0') {
        arr.push(0);
      } else if (binaryNum[binaryNum.length - 1] === '0') {
        clear(arr);
      }
    } else if (binaryNum[i] === '0') {
      if (binaryNum[i + 1] === '1') {
        countZero += arr.length;
        gap.push(countZero);
        clear(arr);
        countZero = 0;
      } else if (binaryNum[i + 1] === '0') {
        arr.push(0);
      } else if (binaryNum[binaryNum.length - 1] === '0') {
        clear(arr);
      }
    }
  }
  return gap;
  // return Math.max(...gap);
}

console.log(solution(1041));
// console.log(solution(2));

/* function binary(num) {
  return num.toString(2);
} */

/* console.log(binary(1041));

100000;
1000;
1; */
