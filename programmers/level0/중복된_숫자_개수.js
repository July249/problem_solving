function solution(array, n) {
  var answer = 0;
  while (array.includes(n)) {
    answer += 1;
    var locateIndex = array.indexOf(n);
    array.splice(locateIndex, 1);
  }
  return answer;
}
