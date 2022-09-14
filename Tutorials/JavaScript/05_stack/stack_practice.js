// 스택 - 올바른 괄호 실습

// My Solution
/* function solution(s) {
  let answer = true;
  let value = 0;
  if (s[0] === ')') {
    value += -999;
  }
  if (s[s.length - 1] === '(') {
    value -= 999;
  }
  for (let i = 0; i < s.length; i += 1) {
    if (s[i] === '(') {
      value += 1;
    } else if (s[i] === ')') {
      value -= 1;
    }
  }

  if (value === 0) {
    return answer;
  } else {
    return !answer;
  }
} */

// Answer Sheet - use stack
/* function solution(s) {
  // use Stack
  // s에 여는 괄호 '('가 있으면, stack 배열에 '('를 추가한다.
  // s에 닫는 괄호 ')'가 있으면, stack 배열에 '('를 삭제한다.

  const stack = [];

  for (const c of s) {
    if (c === '(') {
      stack.push(c);
    } else {
      if (stack.length === 0) {
        return false;
      }
      stack.pop();
    }
  }
  return stack.length === 0;
} */

// Answer Sheet - use count
function solution(s) {
  let count = 0;
  for (const c of s) {
    if (c === '(') {
      count += 1;
    } else {
      if (count === 0) {
        return false;
      }
      count -= 1;
    }
  }
  return count === 0;
}

solution('()()');
solution('(())()');
solution(')()(');
solution('(()(');
