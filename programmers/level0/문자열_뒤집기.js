// 재귀함수를 이용한 방법
function solution(my_string) {
  if (my_string.length <= 1) {
    return my_string;
  }
  return solution(my_string.slice(1)) + my_string[0];
}

/* 
function solution(my_string) {
  var answer = '';
  for (let i = my_string.length - 1; i >= 0; i--) {
    answer += my_string[i];
  }
  return answer;
} 
*/
