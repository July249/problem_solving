function solution(num_list, n) {
  let answer = [];
  let i = 0;
  let arr = [];
  while (i <= num_list.length) {
    if (arr.length < n) {
      arr.push(num_list[i]);
    } else {
      answer.push(arr);
      arr = [];
      arr.push(num_list[i]);
    }
    i++;
  }
  return answer;
}

console.log(solution([1, 2, 3, 4, 5, 6, 7, 8], 2)); // [[1, 2], [3, 4], [5, 6], [7, 8]]
/* 
i     arr.length      arr.length < 2      arr         anwer
0     0               true                [1]         []
1     1               true                [1, 2]      []
2     2               false               [3]         [[1, 2]]
3     1               true                [3, 4]      [[1, 2]]
4     2               false               [5]         [[1, 2], [3, 4]]
5     1               true                [5, 6]      [[1, 2], [3, 4]]
6     2               false               [7]         [[1, 2], [3, 4], [5, 6]]
7     1               true                [7, 8]      [[1, 2], [3, 4], [5, 6]]
8     2               false               [undefined] [[1, 2], [3, 4], [5, 6], [7, 8]]
*/

console.log(solution([100, 95, 2, 4, 5, 6, 18, 33, 948], 3)); // [[100, 95, 2], [4, 5, 6], [18, 33, 948]]
