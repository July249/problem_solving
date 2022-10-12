function solution(price) {
  var answer =
    price < 100000
      ? price
      : price < 300000
      ? (1 - 0.05) * price
      : price < 500000
      ? (1 - 0.1) * price
      : (1 - 0.2) * price;
  return Math.floor(answer);
}

console.log(solution(1000)); // 1000
console.log(solution(80000)); // 80000
console.log(solution(150000)); // 142500
console.log(solution(300000)); // 270000
console.log(solution(580000)); // 464000
console.log(solution(600000)); // 480000
console.log(solution(1000000)); // 800000
