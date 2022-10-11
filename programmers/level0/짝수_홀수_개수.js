// ed. 2022-10-11
function solution(num_list) {
  var even = 0;
  var odd = 0;

  num_list.forEach((num) => (num % 2 === 0 ? (even += 1) : (odd += 1)));

  var answer = [even, odd];
  return answer;
}

/* function solution(num_list) {
  var even = 0;
  var odd = 0;

  num_list.forEach((num) => {
    if (num % 2 === 0) {
      even += 1;
    } else {
      odd += 1;
    }
  });
  var answer = [even, odd];
  return answer;
} */
