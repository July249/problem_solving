function solution(before, after) {
  let answer = 0;
  const beforeArr = before.split('');
  const afterArr = after.split('');

  if (beforeArr.length !== afterArr.length) {
    return answer;
  } else {
    before.forEach((val) => {
      for (let i in afterArr) {
      }
    });
  }

  return answer;
}

console.log(solution('olleh', 'hello')); // 1
console.log(solution('allpe', 'apple')); // 0
