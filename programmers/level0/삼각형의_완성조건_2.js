function solution(sides) {
  const maxNum = Math.max(...sides),
    minNum = Math.min(...sides);
  const difference = maxNum - minNum,
    sum = maxNum + minNum;
  const result = sum - 1 - (difference + 1) + 1;
  // 후보군 중 가장 큰값은 sum-1부터 내림차순 & 후보군 중 가장 작은 값은 차이값+1
  // 따라서 sum-1 ~ difference+1 사이값의 개수가 정답
  return result;
}

console.log(solution([1, 2])); // 2
console.log(solution([3, 6])); //  4,5,6 & 7,8
console.log(solution([11, 7])); // 5,6,7,8,9,10,11 & 12,13,14,15,16,17
