function solution(s) {
  if (s.length === 1) return s;

  const regEx = new RegExp(/[A-Z]/);
  const lowerCaseArr = s.replaceAll(/[A-Z]/g, '').split('').sort().reverse();
  const upperCaseArr = s
    .split('')
    .filter((i) => regEx.test(i))
    .sort()
    .reverse();
  return lowerCaseArr.concat(upperCaseArr).join('');
}

// console.log(solution('Zbcdefg'));
console.log(solution('Zbcdefg'));
// console.log(solution('B'));
