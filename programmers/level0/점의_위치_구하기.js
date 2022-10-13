function solution(dot) {
  let x = dot[0];
  let y = dot[1];
  var answer = 0;
  if (x === 0 || y === 0) {
    return (answer = 0);
  } else if (x !== 0 && y !== 0) {
    if (y > 0) {
      x > 0 ? (answer = 1) : (answer = 2);
    } else if (y < 0) {
      x < 0 ? (answer = 3) : (answer = 4);
    }
  }
  return answer;
}

/* 
function solution(dot) {
  let x = dot[0];
  let y = dot[1];
  var answer = 0;
  if (x === 0 || y === 0) {
      return answer = 0;
  } else if (x !== 0 && y !== 0) {
      if (y > 0) {
          if (x > 0) {
              return answer = 1;
          } else if (x < 0) {
              return answer = 2;
          }
      } else if (y < 0) {
          if (x < 0) {
              return answer = 3;
          } else if (x > 0) {
              return answer = 4;
          }
      }
  }
  return answer;
} 
*/
