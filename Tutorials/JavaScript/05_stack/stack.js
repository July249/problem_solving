// stack : last in first out이라는 개념을 가진 선형 자료구조이다.
// 바닥이 막힌 상자를 생각하면 개념을 연상하기 쉽다.

// ex
/* function sum(a, b) {
  return a + b;
}

function print(value) {
  console.log(value);
}

print(sum(5, 10)); */
// print 함수가 먼저 stack에 들어가서 실행되고, 그 다음에 sum 함수가 들어가서 실행된다.
// 실행된 결과를 추출할 때는 먼저 sum 함수의 결과물인 15가 별도의 메모리에 저장되고,
// 해당 값은 15를 print 함수가 추출하여 실행된다.

// Array로 표현하기
// stack을 array로 표현할 수 있다.

// linked list로 표현하기
// stack을 linked list로 표현할 수 있다.

// JS에서의 사용법
// 1. Array로 구현
/* const stack = [];

// push
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack); // [1, 2, 3]

// pop
stack.pop();
console.log(stack); // [1, 2]

// Get Top
console.log(stack[stack.length - 1]); // 2 */

// 2. linked list로 구현

// Node 클래스 생성
class Node {
  constructor(value) {
    // 생성자에 value 객체 생성하고 해당 객체는 value를 가지게 설정
    this.value = value;
    // 생성자에 next 객체를 생성하고 노드의 포인터는 아무것도 가리키지 않음
    this.next = null;
  }
}

// Stack 클래스 생성
class Stack {
  constructor() {
    // 비어있는 박스를 생각하면 됨
    // top 객체를 생성하고 아무것도 할당되지 않음
    this.top = null;
    // 비어있는 상자이므로 당연히 크기는 0임
    this.size = 0;
  }

  push(value) {
    // push 함수로 입력된 value를 새로운 노드로 선언
    const node = new Node(value);
    // 생성된 새로운 노드의 포인터를 새로운 top 객체에 할당
    node.next = this.top;
    // 기존의 top 객체는 이제 입력 받은 노드로 할당
    this.top = node;
    // 입력된게 있으면 해당 개수만큼 크기를 1씩 추가
    this.size += 1;
  }

  pop() {
    // top 객체에 저장된 값을 value로 지정
    const value = this.top.value;
    // top 객체를 top 객체의 포인터로 지정
    this.top = this.top.next;
    // 제거된게 있으면 해당 개수만큼 크기를 1씩 감소
    this.size -= 1;
    // 삭제된 상자의 맨 위의 값을 리턴하고 종료
    return value;
  }

  size() {
    return this.size;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop()); // 3
stack.push(4);
console.log(stack.pop()); // 4
console.log(stack.pop()); // 2
console.log(stack); // Stack { top: Node { value: 1, next: null }, size: 1 }
