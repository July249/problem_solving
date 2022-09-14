// 해시 테이블

// 1. intro
// 해시 테이블은 한정된 배열 공간에 key를 index로 변환하여 값들을 넣게 된다.
// 그럼 index는 어떻게 구할까?

// ex.
// [1, 1, 2, 3, 5, 8, 13, 21, 34]

// 2. 해시테이블의 정의
// key와 value를 받아 key를 hashing하여 나온 index에 값을 저장하는 선형 자료구조
// 삽입은 O(1)이며 key를 알고 있다면 삭제, 탐색도 O(1)로 수행한다.

// 3. 용어
// 각 table에 해당하는 인덱스를 bucket이라고 한다.
// table의 각 요소는 key와 value를 둘 다 저장하고 있다.

// 4. 해시 함수
// 입력 받은 값을 특정 범위 내 숫자로 변경하는 함수

// 5. 해시 테이블의 문제점
// 해시 함수의 결과가 동일하게 겹치는 경우가 발생할 수 있다.
// 이를 해시충돌이라고 한다.

// 6. 해시 충돌(hash collision) 해결 방법
// (1) 선형 탐사법
// 충돌이 발생하면 옆으로 index를 한 칸 이동시킨다.
// 단순한 구조이나 특정 영역에 값이 몰리는 문제가 발생할 수 있다.
// 지속적으로 해시충돌이 일어나는 경우, 계속 옆으로 이동해야 하므로 탐색, 삭제에 있어 선형시간이 소요될 수 있다.

// (2) 제곱 탐사법
// 충돌이 발생하면 충돌이 발생한 횟수의 제곱만큼 옆으로 이동한다.

// (3) 이중 해싱
// 충돌이 발생하면 다른 해시함수를 이용한다.

// (4) 분리 연결법
// 버킷의 값을 연결리스트로 사용하여 충돌이 발생하면 리스트에 값을 추가한다.
// 최악의 경우 하나의 버킷이 무한정 늘어날 수 있다.

// 6. 해시를 어디에 이용하나요?
// 학생 정보를 어떻게 관리할 것인가? 의 문제에 봉착했다고 가정하자
// 연결리스트를 사용하면 학생 정보를 찾을 때 O(n) 시간복잡도가 걸린다.
// 배열도 마찬가지로 index를 모르면 선형시간이 걸린다.

// 반면 해시 테이블을 사용하면 O(1) 안으로 찾을 수 있다.
// 따라서 빠르게 값을 찾아야하는 경우 해시테이블을 사용하는 것이 좋다.
// 학생 이름을 key로 하기 때문이다.

// 7. JS에서의 사용
// JavaScript Array는 hash table과 유사하다
// 그러나 해시 테이블의 올바른 사용은 아니므로 비추
/* const table = [];
table['key'] = 100;
table['key2'] = 'hello';
console.log(table['key']); // 100
table['key'] = 349;
console.log(table['key']); // 349
delete table['key'];
console.log(table['key']); // undefined */

// Map 함수를 이용하는 방법
/* 
const table = new Map();
table.set('key', 100);
table.set('key2', 'hello');
console.log(table['key']); // undefined
console.log(table.get('key')); // 100

const obj = { a: 1 };
table.set(obj, 'A1');
console.log(table.get(obj)); // A1
table.delete(obj);
console.log(table.get(obj)); // undefined
console.log(table.keys()); // { 'key', 'key2' }
console.log(table.values()); // { 100, 'hello' }
table.clear();
console.log(table.values()); // {  }
 */

// Set 함수를 이용하는 방법
// Set은 키와 값이 동일하게 저장되는 방식이다
// 일종의 집합 연산이라고 볼 수 있다
// 따라서 중복된 내용이 전부 제거될 때 사용할 수 있다
const table = new Set();
table.add('key');
table.add('key2');
console.log(table.has('key')); // true
console.log(table.has('key2')); // true
console.log(table.has('key3')); // false

table.delete('key2');
console.log(table.has('key2')); // false
table.add('key3');
console.log(table.size); // 2
table.clear();
console.log(table.size); // 0
