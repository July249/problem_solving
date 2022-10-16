function solution(my_string, num1, num2) {
  let strArr = my_string.split('');
  let letterOne = strArr[num1];
  let letterTwo = strArr[num2];
  strArr.splice(num1, 1, letterTwo);
  strArr.splice(num2, 1, letterOne);
  const answer = strArr.join('');
  return answer;
}
