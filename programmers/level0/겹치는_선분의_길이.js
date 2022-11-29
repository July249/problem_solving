Set.prototype.intersection = function (set) {
  const result = new Set();

  for (const value of set) {
    if (this.has(value)) result.add(value);
  }

  return result;
};

function solution(lines) {
  let answer = 0;
  // console.log(...lines);

  const [red, green, blue] = lines;
  // console.log({ red, green, blue });
  for (let line of [red, green, blue]) {
    // console.log(green[0], green[1]);
    let k = line[1];
    for (let i = line[0]; i <= k - 2; i++) {
      line.push(i + 1);
      line.sort((a, b) => a - b);
    }
  }

  const A = new Set(red);
  const B = new Set(green);
  const C = new Set(blue);
  //console.log(`redLine: ${red}, greenLine: ${green}, blueLine: ${blue}`);
  //console.log(A);
  //console.log(B);
  //console.log(C);

  const AandB = A.intersection(B);
  const BandC = B.intersection(C);
  const CandA = C.intersection(A);
  // console.log(AandB.size);
  // console.log(BandC.size);
  // console.log(CandA.size);

  let result = [];

  if (AandB.size !== 0) {
    const arr = [];
    for (let i of AandB.values()) {
      arr.push(i);
    }
    result.push(arr);
  }
  if (BandC.size !== 0) {
    const arr = [];
    for (let i of BandC.values()) {
      arr.push(i);
    }
    result.push(arr);
  }
  if (CandA.size !== 0) {
    const arr = [];
    for (let i of CandA.values()) {
      arr.push(i);
    }
    result.push(arr);
  }

  console.log(result);
}

solution([
  [0, 1],
  [2, 5],
  [3, 9],
]);

// console.log(
//   solution([
//     [0, 1],
//     [2, 5],
//     [3, 9],
//   ])
// ); // 2
// console.log(
//   solution([
//     [-1, 1],
//     [1, 3],
//     [3, 9],
//   ])
// ); // 0
// console.log(
//   solution([
//     [0, 5],
//     [3, 9],
//     [1, 10],
//   ])
// ); // 8

// 호준님 풀이
// function solution(lines){
//   // 100이 0, 101은 1
//   // 99는 -1, 98은 -2
//   let line = Array(201).fill(0) // 0 포함 201개
//   for (let [i, j] of lines){
//       for(;i < j; i++){
//           line[100 + i]++
//       }
//   }
//   return line.filter(v => v >= 2).length
// }
