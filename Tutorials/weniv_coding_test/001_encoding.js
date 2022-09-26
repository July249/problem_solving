/* 
섬으로 향하라!

'   + -- + - + -   '
'   + --- + - +   '
'   + -- + - + -   '
'   + - + - + - +   '

해(1)와 달(0),
Code의 세상 안으로!(En-Coding)
*/

const encodedMsg = [
  '   + -- + - + -   ',
  '   + --- + - +   ',
  '   + -- + - + -   ',
  '   + - + - + - +   ',
];

function encoding(input) {
  const decodedMsg = new Array();

  for (let i = 0; i < input.length; i++) {
    decodedMsg.push('*');
    for (let j = 0; j < input[i].length; j++) {
      if (input[i][j] === '+') {
        decodedMsg.push('1');
      } else if (input[i][j] === '-') {
        decodedMsg.push('0');
      } else {
        decodedMsg.push('/');
      }
    }
  }

  console.log(decodedMsg);
}

encoding(encodedMsg);
