function solution(letter) {
  let answer = '';
  const morse = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
  };
  const letterArr = letter.split(' ');
  for (let i of letterArr) {
    const char = morse[i];
    answer += char;
  }
  return answer;
}

console.log(solution('.... . .-.. .-.. ---')); // "hello"
console.log(solution('.--. -.-- - .... --- -.')); // "python"
