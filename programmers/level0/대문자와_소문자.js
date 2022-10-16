function solution(my_string) {
  const strArr = my_string.split('');
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].toUpperCase() !== strArr[i]) {
      strArr[i] = strArr[i].toUpperCase();
    } else {
      strArr[i] = strArr[i].toLowerCase();
    }
  }
  var answer = strArr.join('');
  return answer;
}

console.log(solution('cccCCC')); // "CCCccc"
console.log(solution('abCdEfghIJ')); // "ABcDeFGHij"
