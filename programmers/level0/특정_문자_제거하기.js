function solution(my_string, letter) {
  var answer = '';
  var array = my_string.split('');
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== letter) {
      answer += array[i];
    } else {
      continue;
    }
  }
  return answer;
}
