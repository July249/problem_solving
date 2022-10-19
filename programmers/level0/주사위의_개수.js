function solution(box, n) {
  /* The number of Maximun Dice */
  const maxNumX = Math.floor(box[0] / n);
  const maxNumY = Math.floor(box[1] / n);
  const maxNumZ = Math.floor(box[2] / n);

  return maxNumX * maxNumY * maxNumZ;
}

console.log(solution([1, 1, 1], 1)); // 1
console.log(solution([10, 8, 6], 3)); // 12
