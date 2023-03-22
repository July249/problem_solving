function sum(A) {
  let result = 0;
  for (let i of A) {
    result += i;
  }
  return result;
}

function permutations(arr, n) {
  if (n === 1) return arr.map((v) => [v]);

  let result = [];

  arr.forEach((fixed, idx, arr) => {
    const rest = arr.filter((_, index) => index === idx);
    const perms = permutations(rest, n - 1);
    const combine = perms.map((v) => [fixed, ...v]);
    result.push(...combine);
  });

  arr.forEach((fixed, idx, arr) => {
    const rest = arr.filter((_, index) => index !== idx);
    const perms = permutations(rest, n - 1);
    const combine = perms.map((v) => [fixed, ...v]);
    result.push(...combine);
  });

  return result;
}

function solution(A, F, M) {
  const possibleNum = [6, 5, 4, 3, 2, 1];
  const sumOfF = M * (A.length + F) - sum(A);

  if (sumOfF < 0 || sumOfF > 6 * F) {
    return [0];
  } else {
    const possiblePerms = permutations(possibleNum, F);
    for (let i of possiblePerms) {
      if (sum(i) !== sumOfF) {
        continue;
      } else {
        return i;
      }
    }
  }
}

console.log(solution([3, 2, 4, 3], 2, 4)); // [6, 6]
console.log(solution([1, 5, 6], 4, 3)); // [6, 1, 1, 1] or [5, 1, 1, 2]
console.log(solution([1, 2, 3, 4], 4, 6)); // [0]
console.log(solution([6, 1], 1, 1)); // [0]
