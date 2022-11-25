function solution(b) {
  const directions = [
    [0, 0],
    [0, 1],
    [0, -1],
    [1, 1],
    [1, 0],
    [1, -1],
    [-1, -1],
    [-1, 0],
    [-1, 1],
  ];
  let bombSet = new Set();

  for (let i = 0; i < b.length; i++) {
    for (let j = 0; j < b[i].length; j++) {
      if (b[i][j] == 1) {
        directions.forEach((el) => {
          let [nextX, nextY] = el;
          [nextX, nextY] = [i + nextX, j + nextY];
          if (
            nextX >= 0 &&
            nextX < b.length &&
            nextY >= 0 &&
            nextY < b[i].length
          ) {
            bombSet.add(nextX + ' ' + nextY);
          }
        });
      }
    }
  }
  return b.length * b[0].length - bombSet.size;
}
