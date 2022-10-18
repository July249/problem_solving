function solution(age) {
  const ageArr = age.toString().split('');
  ageArr.map((_, idx) => {
    let preConvert = ageArr[idx];
    ageArr[idx] = String.fromCharCode(parseInt(preConvert) + 97);
  });
  const answer = ageArr.join('');
  return answer;
}

// -- Hint: use ASCI Code --

// console.log(String.fromCharCode('97')); // a
// console.log(String.fromCharCode('106')); // j

/* function solution(age) {
  const alphabetArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
  const ageArr = age.toString().split('');
  ageArr.map((val, idx) => {
    ageArr[idx] = alphabetArr[val];
  });
  const answer = ageArr.join('');
  return answer;
} */

console.log(solution(23)); // cd
console.log(solution(51)); // fb
console.log(solution(100)); // baa
