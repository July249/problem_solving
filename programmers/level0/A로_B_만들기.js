function solution(before, after) {
  before = [...before].sort();
  after = [...after].sort();
  return before.filter((val, idx) => val === after[idx]).length === after.length
    ? 1
    : 0;
}

console.log(solution('olleh', 'hello')); // 1
console.log(solution('allpe', 'apple')); // 0
