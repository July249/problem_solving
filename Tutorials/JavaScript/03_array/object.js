// 객체: 객체는 여러 값을 key-value 형태로 결합시킨 복합 타입이다.

// 객체 생성 방법
/* const obj1 = new Object();
const obj2 = {};
const obj3 = { name: 'mike', age: '23' };
console.log(obj1); // {}
console.log(obj2); // {}
console.log(obj3); // { name: 'mike', age: '23' } */

// 객체 추가
const obj = { name: 'mike', age: '23' };

obj['email'] = 'asdf@asdf.com';
obj.phone = '010-1234-5678';
console.log(obj);
/* {
  name: 'mike',
  age: '23',
  email: 'asdf@asdf.com',
  phone: '010-1234-5678'
} */

// 객체 삭제
delete obj.phone;
console.log(obj); // { name: 'mike', age: '23', email: 'asdf@asdf.com' }

// in : 객체 안에 해당 key가 있는지 없는지 확인하는 연산자
console.log('email' in obj); // true
console.log('phone' in obj); // false

// 객체 안에 존재하는 모든 key를 확인 (배열 형태로 출력됨)
console.log(Object.keys(obj)); // [ 'name', 'age', 'email' ]
// 객체 안에 존재하는 모든 value를 확인 (배열 형태로 출력됨)
console.log(Object.values(obj)); // [ 'mike', '23', 'asdf@asdf.com' ]

// for in 문법
for (const key in obj) {
  console.log(key, obj[key]);
}
// name mike
// age 23
// email asdf@asdf.com
