// Set
const set = new Set([1, 2, 3]);
console.log(set); // Set(3) { 1, 2, 3 }

// 사이즈 확인
console.log(set.size); // 3

// 존재 확인
console.log(set.has(2)); // true
console.log(set.has(6)); // false

// 순회
set.forEach((item) => console.log(item));
for (const value of set.values()) {
  console.log(value);
}
/* 
1
2
3
*/

// 추가 (set은 요소의 중복이 불가하다.)
set.add(6);
console.log(set); // Set(4) { 1, 2, 3, 6 }
set.add(6);
console.log(set); // Set(4) { 1, 2, 3, 6 }

// 삭제
set.delete(6);
console.log(set); // Set(3) { 1, 2, 3 }

// 전부 삭제
set.clear();
console.log(set.size); // 0

// Object 세트
const obj1 = { name: '🍎', price: 8 };
const obj2 = { name: '🍌', price: 5 };
const objs = new Set([obj1, obj2]);
console.log(objs);
// Set(2) { { name: '🍎', price: 8 }, { name: '🍌', price: 5 } }

// Quiz
obj1.price = 10;
objs.add(obj1); // set.size가 3?? nope!
console.log(objs); // objs가 shallow copy 되었다.

// Quiz
const obj3 = { name: '🍌', price: 5 };
objs.add(obj3); // set.size가 3?? Yes!
console.log(objs);
