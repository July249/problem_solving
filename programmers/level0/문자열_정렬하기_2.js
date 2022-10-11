// ed. 2022-10-11
function solution(my_string) {
  var answer = my_string.toLowerCase().split('').sort().join('');
  return answer;
}

/* function solution(my_string) {
  var answer = '';
  var array = my_string.toLowerCase().split('');
  answer = array.sort().join('');
  return answer;
} */
