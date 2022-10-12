const values = [1, 2, 1, 3, 5, 4, 5, 3, 4, 4];

// reduce 메서드 - 비추
const result = values.reduce(
  (unique, val, idx, _values) =>
    // 현재 순회중인 요소의 인덱스 idx가 val의 인덱스와 같다면 val은 처음 순회하는 요소이다
    // 현재 순회중인 요소의 인덱스 idx가 val의 인덱스와 다르다면 val은 중복된 요소이다
    // 처음 순회하는 요소만 초기값 []가 전달된 unique 배열에 담아 반환하면 중복된 요소는 제거된다
    _values.indexOf(val) === idx ? [...unique, val] : unique,
  []
);

console.log(result); // [1, 2, 3, 5, 4]

// filter 메서드 - 중추
// 현재 순회중인 요소의 인덱스 idx가 val의 인덱스와 같다면 val은 처음 순회하는 요소이므로 이 요소만 필터링한다
const filteredResult = values.filter(
  (val, idx, _values) => _values.indexOf(val) === idx
);
console.log(filteredResult); // [1, 2, 3, 5, 4]

// 중복되지 않는 유일한 값들의 집합인 Set 사용 - 강추
// 중복을 허용하지 않는 Set 객체의 특성을 활용
const setResult = [...new Set(values)];
console.log(setResult); // [1, 2, 3, 5, 4];
