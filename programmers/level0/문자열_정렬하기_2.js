function solution(my_string) {
  var answer = '';
  var array = my_string.toLowerCase().split('');
  answer = array.sort().join('');
  return answer;
}
