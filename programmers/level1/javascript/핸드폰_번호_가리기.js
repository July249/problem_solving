function hide_numbers(s) {
  return s.replace(/\d(?=\d{4})/g, "*");
}

// function solution(phone_number) {
//   return phone_number
//     .split("")
//     .map((i, idx) => (idx < phone_number.length - 4 ? "*" : i))
//     .join("");
// }

console.log(solution("01033334444")); // "*******4444"
console.log(solution("027778888")); // 	"*****8888"
