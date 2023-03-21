function solution(A) {
  const B = A.sort();
  let test = [];

  if (B.length === 1) {
    return B[0];
  } else {
    for (let v of B) {
      if (test.includes(v) && test.length >= 1) {
        test = [];
      } else if (!test.includes(v) || test.length === 0) {
        console.log(v);
        test.push(v);
      } else if (test.includes(v) && test.length === 0) {
        test.push(v);
      }
    }
  }

  return test;
}

console.log(solution([9, 3, 9, 3, 9, 7, 9]));
// console.log(solution([1]));
// console.log(solution([1, 3, 5, 3, 5]));
// console.log(solution([2, 2, 3, 3, 4]));
