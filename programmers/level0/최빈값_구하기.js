function solution(array) {
  var answer = 0;
  if (array.length === 1) {
    answer = array[0];
  } else {
    var count = array.reduce((acc, cur) => {
      acc[cur] = (acc[cur] || 0) + 1;
      return acc;
    }, {});
    let keysArr = Object.keys(count);
    let valuesArr = Object.values(count);
    let max = Math.max(...valuesArr);
    let maxIndex = valuesArr.indexOf(max);
    valuesArr.splice(maxIndex, 1);

    if (!valuesArr.includes(max)) {
      answer = parseInt(keysArr[maxIndex]);
    } else {
      answer = -1;
    }
  }
  return answer;
}

console.log(solution([1, 2, 3, 3, 3, 4])); // 3
console.log(solution([1, 1, 2, 2])); // -1
console.log(solution([1])); // 1
