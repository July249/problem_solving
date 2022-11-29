function solution(n, arr1, arr2) {
  let answer = [];
  const zip = (a, b) => a.map((v, i) => [v, b[i]]);
  for ([i, j] of zip(arr1, arr2)) {
    answer.push(
      (i | j).toString(2).padStart(n, '0').replace(/1/g, '#').replace(/0/g, ' ')
    );
  }
  return answer;
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
// 	["#####","# # #", "### #", "# ##", "#####"]
console.log(solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10]));
// ["######", "### #", "## ##", " #### ", " #####", "### # "]
