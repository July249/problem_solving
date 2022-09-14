// 프린터 문제 설명

// 중요도가 높은 문서를 먼저 인쇄하는 프린터를 개발
// 프린터의 작동 방식
// 1. 인쇄 대기목록의 가장 앞에 있는 문서(J)를 대기목록에서 꺼낸다.
// 2. 나머지 인쇄 대기목록에서 J보다 중요도가 높은 문서가 한 개라도 있는 경우, J를 대기목록의 가장 마지막으로 넣는다.
// 3. 그렇지 않으면 J를 인쇄한다.

// 예시
// 대기 목록: [A, B, C, D]
// 우선 순위: [2, 1, 3, 2]
// 프린트 작동 순서
// 1. A를 꺼냄
// 2. 대기목록 [B, C, D]
// 3. 대기목록 중 A의 중요도(2) 보다 높은 (3)이 존재
// 4. A를 다시 대기목록의 맨 뒤로 넣음
// 5. 대기목록 [B, C, D, A]
// 6. B를 꺼냄
// 7. 대기목록 [C, D, A]
// 8. 대기목록 중 B의 중요도 (1) 보다 높은 (3)이 존재
// 9. B를 다시 대기목록의 맨 뒤로 넣음
// 10. 대기목록 [C, D, A, B]
// 11. C를 꺼냄
// 12. 대기목록 [D, A, B]
// 13. 대기목록 중 C의 중요도(3) 보다 높은 목록이 없음
// 14. >> C를 출력
// 15. D를 꺼냄
// 16. 대기목록 [A, B]
// 17. 대기목록 중 D의 중요도(2) 보다 높은 목록이 없음
// 18. >> D를 출력
// 19. 대기목록 [A, B]
// 20. A를 꺼냄
// 21. 대기목록 중 A의 중요도(2) 보다 높은 목록이 없음
// 22. >> A를 출력
// 23. 대기목록 [B]
// 24. B를 꺼냄
// 25. 대기목록 중 B의 중요도(1) 보다 높은 목록이 없음
// 26. >> B를 출력
// Order: C, D, A, B 순서로 출력

// 내가 인쇄를 요청한 문서가 몇 번째로 인쇄되는지 알고 싶다.
// 중요도가 순서대로 담긴 배열 Priorities
// 인쇄 요청한 문서가 현재 대기목록의 어떤 위치에 있는지 알려주는 변수 location
// 내가 인쇄를 요청한 문서가 몇 번째로 인쇄되는지 return 하도록 solution 함수를 작성하라

// ==================================================================================

// My Solution
/* 
function solution(priorities, location) {
  const topArray = new Array(priorities.length).fill(0);
  const locArray = new Array(priorities.length).fill(0);
  let front = 0;
  let rear = priorities.length - 1;
  const topPriority = Math.max(...priorities);

  locArray[location] = 1;

  const isTop = (i) => i === topPriority;
  const top = priorities.findIndex(isTop);
  topArray[top] = 1;

  const isOne = (i) => i === 1;
  let loc = locArray.findIndex(isOne);

  if (top === loc) {
    // return 1;
    console.log(1);
  } else {
    while (front < top) {
      const valueOfPriorities = priorities[front];
      const valueOfTopArray = topArray[front];
      const valueOfLocArray = locArray[front];

      delete priorities[front];
      delete topArray[front];
      delete locArray[front];

      front += 1;
      rear += 1;

      priorities[rear] = valueOfPriorities;
      topArray[rear] = valueOfTopArray;
      locArray[rear] = valueOfLocArray;

      loc = locArray.findIndex(isOne);
    }
    const result = loc - top + 1;
    // return result;
    console.log(result);
  }
}

solution([2, 1, 3, 2], 2); // 1
solution([1, 1, 9, 1, 1, 1], 0); // 5
 */
// Test example 2개는 통과하였음
// 코드 실행 결과 20개 중 5개만 통과되었음

// Answer Sheet - use linked list
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue(newValue) {
    const newNode = new Node(newValue);
    if (this.head === null) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  dequeue() {
    const value = this.head.value;
    this.head = this.head.next;
    return value;
  }

  peek() {
    return this.head.value;
  }
}

function solution(priorities, location) {
  const queue = new Queue();

  for (let i = 0; i < priorities.length; i += 1) {
    // queue에 우선순위와 index를 넣음
    queue.enqueue([priorities[i], i]);
    // console.log(queue);
    // [[2, 0], [1, 1], [3, 2], [2, 3]]
  }

  // priorities 배열을 내림차순으로 정렬
  // 가장 우선순위의 문서를 알기 위해 작업함
  priorities.sort((a, b) => b - a);
  // console.log(priorities); // [3, 2, 2, 1];

  // 내 문서의 출력 순서 변수 myOrder 선언 및 초기화
  let myOrder = 0;

  while (true) {
    // 대기목록 front를 currentValue로 선언
    const currentValue = queue.peek();

    // queue front 배열의 0번째 인덱스(=해당 값의 우선순위)가 가장 높은 우선순위의 값보다 작으면,
    if (currentValue[0] < priorities[myOrder]) {
      // queue front link를 제거하고
      // queue rear link로 걸고
      queue.enqueue(queue.dequeue());
      // console.log(queue);
      /*
      Queue {
        head: Node { value: [ 1, 1 ], next: Node { value: [Array], next: [Node] } },
        tail: Node { value: [ 2, 0 ], next: null }
      }
      Queue {
        head: Node { value: [ 3, 2 ], next: Node { value: [Array], next: [Node] } },
        tail: Node { value: [ 1, 1 ], next: null }
      }
       */
    } else {
      // console.log(queue.peek()); // [3, 2]
      const value = queue.dequeue();
      // console.log(value); // [3, 2]

      // 문서가 하나 출력되었으므로, 내 문서의 출력 순서는 0번이 아니다.
      // 따라서 1을 증가시킨다.
      myOrder += 1;

      // 이번에 출력하는 문서가 내가 찾는 문서 (location)라면,
      if (location === value[1]) {
        return console.log(myOrder);
      }
    }
  }
}

solution([2, 1, 3, 2], 2); // 1
/* 
Queue {
  head: Node { value: [ 2, 0 ], next: null },
  tail: Node { value: [ 2, 0 ], next: null }
}
Queue {
  head: Node { value: [ 2, 0 ], next: Node { value: [Array], next: null } },
  tail: Node { value: [ 1, 1 ], next: null }
}
Queue {
  head: Node { value: [ 2, 0 ], next: Node { value: [Array], next: [Node] } },
  tail: Node { value: [ 3, 2 ], next: null }
}
Queue {
  head: Node { value: [ 2, 0 ], next: Node { value: [Array], next: [Node] } },
  tail: Node { value: [ 2, 3 ], next: null }
} 
*/

solution([1, 1, 9, 1, 1, 1], 0); // 5
