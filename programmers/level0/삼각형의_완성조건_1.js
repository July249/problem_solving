function solution(sides) {
  var answer = 0;
  var one = sides[0];
  var two = sides[1];
  var three = sides[2];
  if (one + two > three && one + three > two && two + three > one) {
    answer = 1;
  } else {
    answer = 2;
  }
  return answer;
}
