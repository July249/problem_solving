// 1. 배열의 구조
// 1.1 배열이란
// 배열이란, 연관된 데이터를 연속적인 형태로 구성된 구조를 가진다.
// 배열에 포함된 원소는 순서대로 번호(index)가 붙는다.

// 1.2 배열의 특징
// 1.2.1 고정된 크기를 가지면 일반적으로 동적으로 크기를 늘릴 수 없다.
// - 자바스크립트처럼 대부분의 스크립트 언어는 동적으로 크기가 증감되도록 만들어져 있다.
// 1.2.2 원하는 원소의 index를 알고 있다면, O(1)로 원소를 찾을 수 있다.
// 1.2.3. 원소를 삭제하면 해당 index에 빈자리가 생긴다.

// 1.3 배열 요소 삭제
// - 배열의 중간에 하나의 index 요소를 삭제하였을 경우 빈자리를 채우게 하기 위해서
// - 빈자리 바로 다음의 요소를 하나씩 앞의 index로 당겨주면 된다.
// - 따라서 삭제 후 순서를 맞추려면 O(n)의 시간이 소요된다.

// 1.4 배열 요소 추가
// - 배열의 중간에 하나의 index 요소를 추가하고 싶은 경우
// - 넣고 싶은 index 위치의 뒷 index에 있는 요소부터 하나씩 +1 index 위치로 옮긴다.
// - 따라서 요소를 추가하려면 삭제의 경우와 마찬가지로 O(n)의 시간이 소요된다.

// 1.5 결론!
// - 따라서 추가, 삭제가 반복되는 로직이라면 배열 사용을 권장하지 않는다!
// - 배열은 탐색의 용도로 사용될 때 진가를 발휘한다.

// 2. JS에서의 사용법
// 2.1 배열 생성

// 빈 array를 생성할 수 있습니다.
/* let arr1 = [];
console.log(arr1); // []

// 미리 초기화된 array를 생성할 수 있습니다.
let arr2 = [1, 2, 3, 4, 5];
console.log(arr2); // [1, 2, 3, 4, 5]

// 많은 값을 같은 값으로 초기화할 경우 "fill"를 사용할 수 있습니다.
let arr3 = Array(10).fill(0);
console.log(arr3); // [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

// 특정 로직을 사용하여 초기화할 경우 from을 사용할 수 있습니다.
let arr4 = Array.from({length: 100}, (_, i) => i);
console.log(arr4); // [ 0, 1, 2, 3, ..., 99] */

// 2.2 배열 요소 추가, 삭제

/* const arr = [1, 2, 3];
console.log(arr); // [1, 2, 3]

// 4를 마지막 index에 추가
arr.push(4); // O(1)

// 여러 개를 한번에 추가하고 싶은 경우
arr.push(5, 6);  // O(1)
console.log(arr); // [1, 2, 3, 4, 5, 6]

// index=3에 128을 추가하고 싶은 경우
arr.splice(3, 0, 128); // O(n)
console.log(arr); // [1, 2, 3, 128, 4, 5, 6]

// index=3에 있는 값을 제거하고 싶은 경우
arr.splice(3, 1); // O(n)
console.log(arr); // [1, 2, 3, 4, 5, 6]
console.log(arr[3]); // 4 */

// 2.3 JS 배열의 특이점

/* // 자바스크립트의 Array는 다른 언어의 Array와 조금 다르다.
// 자바스크립트의 Array는 동적이다.
const arr = [];
console.log(arr); // []
arr.push(1);
arr.push(1);
arr.push(2);
arr.push(3);
console.log(arr); // [1, 1, 2, 3]

// 자바스크립트의 Array는 HashMap에 가깝다.
console.log(arr.length); // 4

// index가 number가 아니어도 된다.
arr["string"] = 10;
arr[false] = 0;
console.log(arr); // [1, 1, 2, 3, string: 10, false: 0]
console.log(arr.length); // 4
arr[4] = 5;
console.log(arr.length); // 5 */

/* // 배열
// 배열: 연관된 데이터를 연속적인 형태로 저장하는 복합 타입 배열에 포함된 원소는 순서대로 번호(index)가 붇는다.

const arr1 = new Array();
const arr2 = [];
const arr3 = [1, 2, 3, 4, 5];
const arr4 = new Array(5);

console.log(arr1); // []
console.log(arr2); // []
console.log(arr3); // [1, 2, 3, 4, 5]
console.log(arr4); // [ <5 empty items> ]
console.log(arr4.length); // 5

// 특정 값으로 초기화하고 싶은 경우
const arr5 = new Array(5).fill(0);
console.log(arr5); // [ 0, 0, 0, 0, 0 ]

const arr6 = Array.from(Array(5), (v, k) => k + 1);
console.log(arr6); // [ 1, 2, 3, 4, 5 ] */

// ================================================

/* // 배열의 요소
const arr = [1, 2, 3, 4, 5];
console.log(arr.length); // 5

// lenght로 array를 직접 조작하는 행동은 자제할 것!
arr.length = 3;
console.log(arr); // [ 1, 2, 3 ]
arr.length = 10;
console.log(arr); // [ 1, 2, 3, <7 empty items> ]
// 데이터가 날아감 */

// ================================================

// 배열의 여러가지 함수

/* const arr = [1, 2, 3, 4, 5, 6];

// join()
console.log(arr.join(', ')); // 1, 2, 3, 4, 5, 6
console.log(typeof arr.join(', ')); // string

// reverse()
console.log(arr.reverse()); // [6, 5, 4, 3, 2, 1]
// NOTE: reverse를 사용하면 원래 배열에도 영향을 미치게 된다.

// concat() : 두 배열을 합칠 때 사용
const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = [7, 8, 9, 10];
console.log(arr1.concat(arr2));
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(arr2.concat(arr1));
// [7, 8, 9, 10, 1, 2, 3, 4, 5, 6]
 */

// ================================================

/* // 배열의 요소 추가, 삭제
const arr = [1, 2, 3, 4, 5, 6];

// push, pop : 배열의 끝에 있는 요소를 추가, 삭제하는 함수
arr.push(7);
console.log(arr); // [1, 2, 3, 4, 5, 6, 7]
arr.push(8, 9, 10);
console.log(arr); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
arr.pop();
console.log(arr); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
arr.pop();
console.log(arr); // [1, 2, 3, 4, 5, 6, 7, 8]
console.log(arr.pop()); // 8 (배열의 마지막 요소가 return됨)
console.log(arr); // [1, 2, 3, 4, 5, 6, 7] >> 8이 삭제됨

// shift(삭제), unshift(추가): 배열의 첫번째 요소에 추가, 삭제하는 함수
console.log(arr); // [1, 2, 3, 4, 5, 6, 7]
arr.shift();
arr.shift();
console.log(arr); // [3, 4, 5, 6, 7]
arr.unshift(11);
console.log(arr); // [11, 3, 4, 5, 6, 7]

// slice : 배열의 중간에 있는 요소(들)만 빼고 싶은 경우
console.log(arr.slice(2, 4)); // [4, 5] >> 배열에서 원하는 요소만 잘라냄
console.log(arr); // [11, 3, 4, 5, 6, 7] >> 원래 배열에는 변화가 나타나지 않음
const slicedArr = arr.slice(2, 4); // slice를 이용하여 빼낸 배열의 요소를 새로 선언하여 사용해야 한다.
console.log(slicedArr); // [4, 5]
console.log(arr); // [11, 3, 4, 5, 6, 7] >> 원래의 배열에는 변화가 없다.

// splice : 배열의 중간에 있는 요소(들)만 제외히고 나머지 배열의 요소를 출력
arr.splice(2, 2); // ("선택할 요소의 index번호", "선택할 요소의 갯수")
console.log(arr); // [11, 3, 6, 7] >> 원래의 배열에 변화가 생김, [4, 5]가 삭제된 배열이 출력됨
 */

// ================================================

// 배열에서의 for문
/* const arr = [1, 2, 3, 4, 5, 6]; */

// for문
/* for (let i = 0; i < 6; i += 1) {
  console.log(arr[i]);
}
// 1
// 2
// 3
// 4
// 5
// 6 */

// for of문
/* for (const i of arr) {
  console.log(i);
}
// 1
// 2
// 3
// 4
// 5
// 6 */

// ================================================

// 배열 === 객체???
const arr = [1, 2, 3, 4, 5, 6];

console.log(typeof arr); // object

arr['key'] = 'value';
console.log(arr); // [ 1, 2, 3, 4, 5, 6, key: 'value' ] // 객체와 같이 배열에 추가되었음을 확인할 수 있다.
console.log(arr.length); // 6 // 객체는 카운팅이 안된다!!
// 올바른 배열의 사용법이 아니므로 이렇게 사용하지 않도록 주의하여야 한다
