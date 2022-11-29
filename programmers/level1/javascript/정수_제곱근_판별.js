function solution(n) {
  return n % Math.sqrt(n) ? -1 : (Math.sqrt(n) + 1) ** 2;
}
