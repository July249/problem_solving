// ed. 2022-10-11
function solution(my_string, letter) {
  var answer = '';
  my_string.split('').forEach((el) => (el !== letter ? (answer += el) : ''));
  return answer;
}

/*
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

console.log(solution('bus', 'u'));
*/
