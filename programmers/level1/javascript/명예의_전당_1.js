function solution(k, score) {
  const stack = [];
  return score.reduce((a, c) => {
    if (stack.length < k) {
      stack.push(c);
      stack.sort((a, b) => a - b);
    } else {
      stack.push(c);
      stack.sort((a, b) => a - b);
      stack.shift();
    }
    a.push(stack[0]);
    return a;
  }, []);
}

// function solution(k, score) {
//   const answer = [];
//   let count = score.length;
//   let list = [];
//   let idx = 0;
//   while (count > 0) {
//     if (list.length < k) {
//       list.push(score[idx]);
//       list = list.sort((a, b) => b - a);
//       score.shift();
//       answer.push(list[list.length - 1]);
//     } else {
//       list.push(score[idx]);
//       list = list.sort((a, b) => b - a);
//       score.shift();
//       answer.push(list[list.length - 2]);
//       list.pop();
//     }
//     count -= 1;
//   }
//   return answer;
// }

console.log(solution(3, [10, 100, 20, 150, 1, 100, 200]));
console.log(solution(4, [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000]));
