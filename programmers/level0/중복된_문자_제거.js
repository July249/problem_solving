function solution(my_string) {
  let arr = [];
  let i = 0;
  while (i < my_string.length) {
    if (!arr.includes(my_string[i])) {
      arr.push(my_string[i]);
    }
    i++;
  }
  const answer = arr.join('');
  return answer;
}

console.log(solution('people')); // "peol"
console.log(solution('We are the world')); // "We arthwold"
