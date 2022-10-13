const solution = (str1, str2) => (str1.match(new RegExp(str2), 'gi') ? 1 : 2);

/* const solution = (str1, str2) =>
  str1.includes(str2) ? (answer = 1) : (answer = 2); */

console.log(solution('ab6CDE443fgh22iJKlmn1o', '6CD')); // 1
console.log(solution('ppprrrogrammers', 'pppp')); // 2
