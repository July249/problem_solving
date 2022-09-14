// 순열과 조합

/* 
순열과 조합은 코딩 테스트에서 은근히 자주 사용되는 기능입니다. 
아쉽게도 자바스크립트에선 자체적으로 제공해주는 built-in 함수가 없기에 직접 구현해야 합니다.

순열과 조합은 재귀 함수를 이용하면 쉽게 만들 수 있습니다. 
물론 성능이나 콜 스택 위험으로 인해 "스택"으로 구현하는 것이 좋지만 순열과 조합 자체가 시간복잡도가 굉장히 크기 때문에
코딩 테스트에서 n이 크게 나오는 경우는 많지 않습니다. 
따라서 재귀로 외우는 것이 직관적이고 편합니다.
*/

// 순열

// 순열의 시간복잡도는 O(n!) 입니다.

function permutations(arr, n) {
  // 1개만 뽑는다면 그대로 순열을 반환한다. 탈출 조건으로도 사용된다.
  if (n === 1) return arr.map((v) => [v]);

  let result = [];

  // 요소를 순환한다
  arr.forEach((fixed, idx, arr) => {
    // 현재 index를 제외한 요소를 추출한다.
    // index번째는 선택된 요소
    const rest = arr.filter((_, index) => index !== idx);
    // 선택된 요소를 제외하고 재귀 호출한다.
    const perms = permutations(rest, n - 1);
    // 선택된 요소와 재귀 호출을 통해 구한 순열을 합쳐준다.
    const combine = perms.map((v) => [fixed, ...v]);
    // 결과 값을 추가한다.
    result.push(...combine);
  });

  // 결과 반환
  return result;
}

console.log(permutations([1, 2, 3], 3));

// 조함

// 조합의 시간복잡도는 O(2n) 입니다.

function combinations(arr, n) {
  // 1개만 뽑는다면 그대로 조합을 반환한다. 탈출 조건으로도 사용된다.
  if (n === 1) return arr.map((v) => [v]);

  const result = [];

  // 요소를 순환한다
  arr.forEach((fixed, idx, arr) => {
    // 현재 index 이후 요소를 추출한다.
    // index번째는 선택된 요소
    const rest = arr.slice(idx + 1);
    // 선택된 요소 이전 요소들을 제외하고 재귀 호출한다.
    const combis = combinations(rest, n - 1);
    // 선택된 요소와 재귀 호출을 통해 구한 조합을 합쳐준다.
    const combine = combis.map((v) => [fixed, ...v]);
    // 결과 값을 추가한다.
    result.push(...combine);
  });

  // 결과 반화
  return result;
}

console.log(combinations([1, 2, 3], 3));
