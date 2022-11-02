function solution(record) {
  let answer = [];
  let user = {};
  for (let i of record) {
    const [state, id, nick] = i.split(' ');
    if (state === 'Enter') {
      user[id] = nick;
      answer.push([id, '님이 들어왔습니다.']);
    } else if (state === 'Leave') {
      answer.push([id, '님이 나갔습니다.']);
    } else if (state === 'Change') {
      user[id] = nick;
    }
    // answer.push([state, id, nick]);
  }
  // console.log(user);
  answer = answer.map((item) => user[item[0]] + item[1]);
  return answer;
}

console.log(
  solution([
    'Enter uid1234 Muzi',
    'Enter uid4567 Prodo',
    'Leave uid1234',
    'Enter uid1234 Prodo',
    'Change uid4567 Ryan',
  ])
);

// 풀이를 위한 기본 문법
/* let test = ['A 10 !', 'B 20 !', 'A 22', 'B 20 @', 'A 21 @'];

test.forEach((s) => {
  console.log(s);
  const [a, b, c] = s.split(' ');
  console.log(a, b, c);
  console.log(s.split(' '));
  console.log('-----------------');
}); */
