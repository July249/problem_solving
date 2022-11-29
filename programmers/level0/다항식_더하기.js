[3, 10].join(' + ')
// '3 + 10'
[3, 10].join('x + ');
// '3x + 10'

// '3x + 7 + x'
'3x + 7 + x'.split(' + ')
// ['3x', '7', 'x']

'3x + 7 + x'.split(' + ').filter(v => v.includes('x'))
// ['3x', 'x']

// x 항만 골라내기
'3x + 7 + x'.split(' + ').filter(v => v.includes('x')).map(v => v.includes('x') ? v.replace('x', '') || '1');
// ['3', '1']

'3x + 7 + x'.split(' + ').filter(v => v.includes('x')).map(v => v.includes('x') ? v.replace('x', '') || '1');
// ['3', '1']

"3x + 7 + x"
    .split(" + ")
    .filter((v) => v.includes("x"))
    .map((v) => +v.replace("x", "") || 1);

"3x + 7 + x"
    .split(" + ")
    .filter((v) => v.includes("x"))
    .map((v) => +v.replace("x", "") || 1)
    .reduce((a, c) => a + c, 0);

// 숫자 항만 골라내기
"3x + 7 + x"
    .split(" + ")
    .filter((v) => !v.includes("x"))
    .map((v) => +v)
    .reduce((a, c) => a + c, 0);

// 간소화 방식
function solution(polynomial) {
    answer = []
    answer.push(polynomial
            .split(" + ")
            .filter((v) => v.includes("x"))
            .map((v) => +v.replace("x", "") || 1)
            .reduce((a, c) => a + c, 0)
    );
    answer.push(polynomial
            .split(" + ")
            .filter((v) => !v.includes("x"))
            .map((v) => +v)
            .reduce((a, c) => a + c, 0)
    );
    
    let result = [];
    if (answer[0]) result.push(`${answer[0] === 1 ? "" : answer[0]}x`);
    if (answer[1]) result.push(answer[1]);
    // [10].join(' + ');
    // '10'
    return answer.join(" + ")
}


// 간소화 아닌 방식
function solution(polynomial) {
  answer = []
  answer.push(polynomial
          .split(" + ")
          .filter((v) => v.includes("x"))
          .map((v) => +v.replace("x", "") || 1)
          .reduce((a, c) => a + c, 0))
  answer.push(polynomial
          .split(" + ")
          .filter((v) => !v.includes("x"))
          .map((v) => +v)
          .reduce((a, c) => a + c, 0))
  if (answer[0] === 1 && answer[1] !== 0){
      return `x + ${answer[1]}`
  }
  if (answer[0] === 1 && answer[1] === 0){
      return `x`
  }
  if (answer[0] !== 1 && answer[1] === 0){
      return `${answer[0]}x`
  }
  if (answer[0] === 0 && answer[1] !== 0){
      return `${answer[1]}`
  }
  if (answer[0] === 0 && answer[1] === 0){
      return ``
  }
  return answer.join("x + ")
}

// 최대 좋아요 풀이
function solution(polynomial) {
    const arr = polynomial.split(" + ");
    const xNum = arr
                .filter(n => n.includes("x"))
                .map(n => n.replace('x', '') || '1')
                .reduce((acc, cur) => acc + parseInt(cur, 10), 0);
    const num = arr
                .filter(n => !isNaN(n))
                .reduce((acc, cur) => acc + parseInt(cur, 10), 0);

    let answer = [];
    if(xNum) answer.push(`${xNum === 1 ? "" : xNum}x`);
    if(num) answer.push(num);

    return answer.join(" + ");
}