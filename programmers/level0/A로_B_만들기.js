function solution(before, after) {
  let answer = 0;
  const beforeArr = before.split('');
  const afterArr = after.split('');
  let filterArr = new Array(after.length);
  let indexArr = [];

  if (before.length !== after.length) {
    return answer;
  } else {
    beforeArr.forEach((val) => {});
  }

  return filterArr;
}

console.log(solution('olleh', 'hello')); // 1
console.log(solution('allpe', 'apple')); // 0
