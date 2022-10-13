/* function solution(skill, skill_trees) {
  var regExp = /skill/g
  var answer = skill_trees
    .map((v) => v.match(//g).join(''))
    .map((v) => v.match(/skill/g));
  return answer;
}

console.log(solution('CBD', ['BACDE', 'CBADF', 'AECB', 'BDA'])); // 2
 */
////////////////////////////////
// const zip = (a, b) => a.map((v, i) => [v, b[i]]);
// zip([10, 20, 30], [1, 2, 3, 4])
// zip([10, 20, 30], [1, 2])
////////////////////////////////

/* const zip = (a, b) => a.map((v, i) => [v, b[i]]);

let data = ['BACDE', 'CBADF', 'AECB', 'BDA'];

for (let i of data) {
  for ([x, y] of zip('CBD'.split(''), i.match(/[CBD]/g))) {
    console.log(x, y);
  }
  console.log('---------------');
} */

/* function solution(skill, skill_trees) {
  let 패턴 = '[' + skill + ']';
  let 표현식 = new RegExp(패턴, 'g');
  let answer = 0;
  for (i of skill_trees) {
    if (i.match(표현식)) {
      console.log(i.match(표현식));
      console.log(표현식);
      console.log(skill.indexOf(i.match(표현식).join('')));
      if (skill.indexOf(i.match(표현식).join('')) === 0) {
        answer += 1;
      }
    }
  }
  return answer;
}
 */

function solution(skill, skill_trees) {
  let trimmedArr = skill_trees.map((el) =>
    el.replace(new RegExp(`[^${skill}]`, 'g'), '')
  );
  let cnt = 0;
  for (const i of trimmedArr) {
    if (skill.indexOf(i) === 0) {
      cnt += 1;
    }
  }
  return cnt;
}
