// ed. 2022-10-11
// 구조분해할당 이용
function solution(sides) {
  var answer = 0;
  var [sideOne, sideTwo, sideThree] = [...sides];
  sideOne + sideTwo > sideThree &&
  sideOne + sideThree > sideTwo &&
  sideTwo + sideThree > sideOne
    ? (answer = 1)
    : (answer = 2);
  return answer;
}

/* function solution(sides) {
  var answer = 0;
  var sideOne = sides[0];
  var sideTwo = sides[1];
  var sideThree = sides[2];
  (
    sideOne + sideTwo > sideThree &&
    sideOne + sideThree > sideTwo &&
    sideTwo + sideThree > sideOne
  ) ? answer = 1 : answer = 2;
  return answer;
} */

/* function solution(sides) {
  var answer = 0;
  var sideOne = sides[0];
  var sideTwo = sides[1];
  var sideThree = sides[2];
  if (
    sideOne + sideTwo > sideThree &&
    sideOne + sideThree > sideTwo &&
    sideTwo + sideThree > sideOne
  ) {
    answer = 1;
  } else {
    answer = 2;
  }
  return answer;
} */
