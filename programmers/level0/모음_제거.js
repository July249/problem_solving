// ed. 2022-10-11
function solution(my_string) {
  var answer = '';
  var vowel = ['a', 'e', 'i', 'o', 'u'];
  answer = my_string
    .split('')
    .map((el) => (!vowel.includes(el) ? answer + el : ''))
    .join('');
  return answer;
}

/* function solution(my_string) {
  var answer = '';
  var vowel = ['a', 'e', 'i', 'o', 'u'];
  var my_arr = my_string.split('');
  my_arr = my_arr.map((el) => (!vowel.includes(el) ? answer + el : ''));
  answer = my_arr.join('');
  return answer;
} */

console.log(solution('bus')); // bs
console.log(solution('nice to meet you')); // nc t mt y
