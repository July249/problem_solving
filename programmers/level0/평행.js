function getSlope(pair1, pair2) {
  const x1 = pair1[0];
  const y1 = pair1[1];

  const x2 = pair2[0];
  const y2 = pair2[1];

  const slope = (y2 - y1) / (x2 - x1);
  return slope;
}

function solution(dots) {
  let answer = 0;
  const slopeArr = [];
  let pair1 = [];
  let pair2 = [];
  let slopeValue = 0;
  for (let i = 0; i < dots.length; i++) {
    for (let j = i + 1; j < dots.length; j++) {
      pair1 = dots[i];
      pair2 = dots[j];
      slopeValue = getSlope(pair1, pair2);
      slopeArr.push(slopeValue);
    }
  }
  slopeArr.sort((a, b) => a - b);

  let sameSlopeArr = [];
  for (let k = 0; k < slopeArr.length; k++) {
    if (slopeArr[k] === slopeArr[k + 1]) {
      sameSlopeArr.push(slopeArr[k]);
    }
  }

  if (sameSlopeArr.length > 0) {
    answer += 1;
  }
  return answer;
}

console.log(
  solution([
    [1, 4],
    [9, 2],
    [3, 8],
    [11, 6],
  ])
); // 1
console.log(
  solution([
    [3, 5],
    [4, 1],
    [2, 4],
    [5, 10],
  ])
); // 0
