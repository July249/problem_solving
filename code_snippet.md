# 간단한 코드 스니펫

```js
Infinity - Infinity;
Math.ceil();
Math.floor();
// 정규표현식도 간단한 식들은 정리해두세요
parseInt(10 / 3);
Math.floor(10 / 3);
~~(10 / 3)(10 / 3) << 0;
// 2 << 1
// 2 << 2
// 2 << 3
```

## 배열의 평균값

```js
function solution(numbers) {
  // 배열이 빈배열이면 error
  return numbers.reduce((a, c) => a + c, 0) / numbers.length;
}

function solution(numbers) {
  // 아래와 같이 0으로 초기화를 꼭 해주세요.
  return numbers.reduce((a, c) => a + c, 0) / numbers.length;
}
```

## 문자열 안에 문자열

```js
// 'abcdefg'.indexOf('cde')
// 2
// 'abcdefg'.indexOf('zee')
// -1
function solution(str1, str2) {
  if (str1.indexOf(str2) === -1) {
    return 2;
  }
  return 1;
}

function solution(str1, str2) {
  return str1.indexOf(str2) === -1 ? 2 : 1;
}

function solution(str1, str2) {
  return str1.includes(str2) ? 1 : 2;
}

function solution(str1, str2) {
  return str1.split(str2).length > 1 ? 1 : 2;
}
```

## 숨어있는 숫자의 덧셈 (1)

```js
// 문자열 쪼개기
Array.from('aAb1B2cC34oOp');
'aAb1B2cC34oOp'.split('');

Array.from('aAb1B2cC34oOp').map((v) => +v); // 문자열은 NaN으로 변환됨
Array.from('aAb1B2cC34oOp')
  .map((v) => +v)
  .filter((v) => !Number.isNaN(v));
// 순서를 바꿔도 어차피 map으로 숫자를 변환해야 합니다.
// Array.from('aAb1B2cC34oOp').filter(v => +v)

Array.from('aAb1B2cC34oOp')
  .map((v) => +v)
  .filter((v) => !Number.isNaN(v))
  .reduce((a, c) => a + c, 0);

function solution(my_string) {
  return Array.from(my_string)
    .map((v) => +v)
    .filter((v) => !Number.isNaN(v))
    .reduce((a, c) => a + c, 0);
}

'aAb1B2cC34oOp'.replace(/[a-zA-Z]/g, '!');
// '!!!1!2!!34!!!'
'aAb1B2cC34oOp'.replace(/[a-zA-Z]/g, '');
// '1234'
'aAb1B2cC34oOp'.replace(/[^\d]/g, '');
// '1234'
'aAb1B2cC34oOp'.replace(/[\D]/g, '');
// '1234'
'abcAb1B2abcC34oOp'.replaceAll('abc', '');
// 'Ab1B2C34oOp'
'abcAb1B2abcC34oOp'.replaceAll(/[a-zA-Z]/g, '');
// '1234'
'aAb1B2cC34oOp'.match(/[\d]/g);
// ['1', '2', '3', '4']

function solution(my_string) {
  return my_string
    .match(/[\d]/g)
    .map((v) => +v)
    .reduce((a, c) => a + c, 0);
}
```

## 진료 순서 정하기

```js
// 원본이 변경이 되어버리기 때문에 원하는 결과가 안나옵니다.
function solution(emergency) {
  const sorted = emergency.sort((a, b) => b - a);
  return sorted.map((v) => indexOf(v) + 1);
}

let 원본 = [3, 76, 24];
let 사본 = 원본.sort((a, b) => b - a);
사본;
// [76, 24, 3]
원본;
// [76, 24, 3]

function solution(emergency) {
  const sorted = [...emergency].sort((a, b) => b - a);
  return emergency.map((v) => sorted.indexOf(v) + 1);
}

function solution(emergency) {
  const sorted = emergency.slice().sort((a, b) => b - a);
  return emergency.map((v) => sorted.indexOf(v) + 1);
}

// 깊은 복사
// 전개 구문으로 복사
// slice로 복사
// JSON.stringify()로 복사
// Object.assign()으로 복사
// Lodash 라이브러리 사용
```
