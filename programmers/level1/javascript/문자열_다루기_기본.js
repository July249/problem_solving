function firstCheck(s) {
  return s.length === 4 || s.length === 6 ? true : false;
}

function secondCheck(s) {
  const regEx = /[A-z]/g;
  if (regEx.test(s)) {
    return false;
  }
  return true;
}

function solution(s) {
  return firstCheck(s) && secondCheck(s);
}

console.log(solution('1234')); // true true
console.log(solution('123456')); // true true
console.log(solution('ab3456')); // true false
console.log(solution('123456789')); // false true
console.log(solution('12fe56')); // true false
console.log(solution('a234')); // true false
console.log(solution('asdf')); // true false
console.log(solution('12345a')); // true false
console.log(solution('1234567')); // false true
console.log(solution('12345678')); // false true
console.log(solution('asdf123')); // false false
console.log(solution('abcdefghijk')); // false false
console.log(solution('abc')); // false false
