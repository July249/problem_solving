function solution(riddle) {
  const result = [...riddle];
  const alphabet = new Array(26)
    .fill()
    .map((_, i) => String.fromCharCode(i + 97));

  for (let i = 0; i < riddle.length; i++) {
    for (let j = 0; j < alphabet.length; j++) {
      if (!result.includes(alphabet[j]) && result[i] == '?') {
        result[i] = alphabet[j];
      }
    }
  }
  return result.join('');
}

console.log(solution('ab?ac?'));
console.log(solution('rd?e?wg??'));
console.log(solution('????????'));
