/* function solution(array, n) {
  var answer = 0;
  while (array.includes(n)) {
    answer += 1;
    var locateIndex = array.indexOf(n);
    array.splice(locateIndex, 1);
  }
  return answer;
} */

// 대엽님 코드
function solution(array, n) {
  let answer = 0;
  for (const a of array) {
    a === n ? (answer += 1) : (answer += 0);
  }
  return answer;
}
