// 큐

// Queue란, First in First out이라는 개념을 가진 선형 자료구조이다.
// linear Queue와 circular Queue가 존재한다.
// 놀이기구를 탑승하기 위한 대기열로 생각하면 이해하기 쉽다.

// 대기열에 진입하는 것을 EnQueue
// 대기열의 마지막 순번은 Rear
// 대기열의 맨 앞 순번을 front
// 대기열에서 빠져 나오는 것을 DeQueue
// 라고 한다.

// Linear Queue
// 1. array로 표현하기
// linear queue를 array로 표현할 수 있다.
// EnQueue가 반복되어 한정된 배열의 공간이 모두 다 차는 경우를 생각해볼 수 있다.
// 그 이유는 DeQueue가 되어 front에 있던 요소들이 빠져나가고 자리가 비어있기 때문이다.
// 배열에서 요소를 빼면 그 빈자리가 자동으로 채워지지 않음에 유의하라!
// 따라서 반복된 EnQueue로 인해 배열 공간이 가득 차면 다시 앞으로 요소들을 이동시켜야 하므로 O(n) (선형시간)이 소요된다.

// 2. linked list로 표현하기
// array에서의 선형시간 소요 문제를 해결하기 위한 방법이다.
// linked list로 표현하면 head가 front가 되고, tail이 rear가 된다.
// linked list를 사용하기 때문에 index에 대한 문제를 고려하지 않아도 된다.

// JS에서 사용법
// 1. Array로 구현
class Queue {
  // 각각의 요소를 넣을 배열 변수 queue 설정
  // front와 rear를 넣을 index 변수 설정
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  // rear 영역(맨 끝 번호)의 값을 배열에 넣고 rear 영역의 index를 하나 증가시킨다.
  enqueue(value) {
    this.queue[this.rear++] = value;
  }

  dequeue() {
    // queue 배열에서 front 영역에 해당하는 index 번호를 value로 저장
    const value = this.queue[this.front];
    // queue 배열에서 front index 값을 제거 (왜냐면 value로 추출했으니까)
    delete this.queue[this.front];
    // front 번호를 하나 증가시킨다.
    this.front += 1;
    // 추출된 value를 반환
    return value;
  }

  peek() {
    // queue 배열에 저장된 맨 앞의 값을 반환하는 함수
    return this.queue[this.front];
  }

  size() {
    // queue의 크기를 반환
    return this.rear - this.front;
  }
}

const queue = new Queue(); // []
queue.enqueue(1); // [1]
queue.enqueue(2); // [1, 2]
queue.enqueue(4); // [1, 2, 4]
console.log(queue.dequeue()); // 1
queue.enqueue(8); // [2, 4, 8]
console.log(queue.size()); // 3
console.log(queue.peek()); // 2
console.log(queue.dequeue()); // 2
console.log(queue.dequeue()); // 4

// Linked list로 구현 (코딩테스트에서는 배열로 하는 것을 추천)
/* class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  enqueue(newValue) {
    const newNode = new Node(newValue);
    if (this.head === null) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size += 1;
  }

  dequeue() {
    const value = this.head.value;
    this.head = this.head.next;
    this.size -= 1;
    return value;
  }

  peek() {
    return this.head.value;
  }
}

const queue = new Queue();
queue.enqueue(1); // 1
queue.enqueue(2); // 1, 2
queue.enqueue(4); // 1, 2, 4
console.log(queue.dequeue()); // 1
queue.enqueue(8); // 2, 4, 8
console.log(queue.size); // 3
console.log(queue.peek()); // 2
console.log(queue.dequeue()); // 2
console.log(queue.dequeue()); // 4
console.log(queue);
// Queue {
//   head: Node { value: 8, next: null },
//   tail: Node { value: 8, next: null },
//   size: 1
// }
 */

// Remark: shift 함수를 사용하지 마시오!

// Circular Queue
// Front와 Rear가 이어져 있는 Queue
// 제한된 공간에서 Queue를 이용해야하는 경우에 사용된다.
// Circular Queue는 Linked list로 구현했을 때 이점이 없다.

// JS에서 사용법
// 1. Array로 Circular Queue 구현
/* class Queue {
  constructor(maxSize) {
    this.maxSize = maxSize;
    this.queue = [];
    this.front = 0;
    this.rear = 0;
    this.size = 0;
  }

  enqueue(value) {
    if (this.isFull()) {
      console.log('Queue is Full!');
      return;
    }
    this.queue[this.rear] = value;
    // rear index가 maxSize를 기준으로 순환하게 만듦
    this.rear = (this.rear + 1) % this.maxSize;
    this.size += 1;
  }

  dequeue() {
    const value = this.queue[this.front];
    delete this.queue[this.front];
    // front index가 maxSize를 기준으로 순환하게 만듦
    this.front = (this.front + 1) % this.maxSize;
    this.size -= 1;
    return value;
  }
  
  // Circular Queue가 가득 찼는지 확인하는 함수
  isFull() {
    return this.size === this.maxSize;
  }

  peek() {
    return this.queue[this.front];
  }
}

const queue = new Queue(4);
queue.enqueue(1); // [1]
console.log(queue.rear); // 1
queue.enqueue(2); // [1, 2]
console.log(queue.rear); // 2
queue.enqueue(4); // [1, 2, 4]
console.log(queue.rear); // 3
queue.enqueue(8); // [1, 2, 4, 8]
console.log(queue.rear); // 4
console.log(queue.dequeue()); // 1
console.log(queue.dequeue()); // 2
console.log(queue.size); // 2
console.log(queue.peek()); // 4
queue.enqueue(16); // [4, 8, 16]
console.log(queue.size); // 3
queue.enqueue(32); // [4, 8, 16, 32]
console.log(queue.size); // 4
console.log(queue.isFull()); // true */

// Note: Circular Queue를 코테에서 사용하는 일은 많지 않다.
// Note: Circular Queue는 외울 필요가 없다.
