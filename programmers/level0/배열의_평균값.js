function solution(numbers) {
  var sum = 0;
  for (var i of numbers) {
    sum += i;
    var answer = sum / numbers.length;
  }
  return answer;
}
