function solution(numbers) {
  const temp = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      temp.push(numbers[i] + numbers[j]);
    }
  }

  const answer = [...new Set(temp)];

  return answer.sort((a, b) => a - b);
}

// function solution(numbers) {
//   var answer = [];
//   var result1 = [];
//   var result2 = [];
//   if (numbers.length === 2) {
//     answer.push(numbers[0] + numbers[1]);
//     return answer;
//   }

//   numbers.forEach((fixed, idx, numbers) => {
//     var rest = numbers.slice(idx + 1);
//     var combine = rest.map((v) => [fixed, v]);
//     result1.push(...combine);
//   });

//   for (let arr of result1) {
//     let [a, b] = arr;
//     result2.push(a + b);
//   }

//   var set = new Set(result2);
//   for (let item of set) {
//     answer.push(item);
//   }
//   return answer.sort((a, b) => a - b);
// }

console.log(solution([2, 1, 3, 4, 1])); // [2,3,4,5,6,7]
console.log(solution([5, 0, 2, 7])); // [2,5,7,9,12]
