function solution(spell, dic) {
  return dic.some((s) => spell.sort().toString() == [...s].sort().toString())
    ? 1
    : 2;
}
// some() 메서드는 배열 안의 어떤 요소라도 주어진 판별 함수를 통과하는지 테스트

// Array('hello') == Array('hello')
// new Set('hello') == new Set('hello')
// 2개 모두 false
