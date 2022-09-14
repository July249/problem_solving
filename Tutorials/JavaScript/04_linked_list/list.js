// 연결 리스트 (linked list)

// Q. 추가와 삭제가 반복되는 로직이라면 어떻게 해야할까?
// A. 연결리스트를 이용!! (배열은 시간복잡도를 너무 증가시킨다! 배열은 탐색의 용도에 최적화!)

// 1. 연결리스트란,
// 연결리스트는 각 요소를 포인터로 연결하여 관리하는 선형 자료구조이다.
// 각 요소는 노드라고 부르며 데이터 영역과 포인터 영역으로 구성된다.

// 2. 연결리스트의 특징
// - 메모리가 허용하는 한에서 요소를 제한없이 추가할 수 있다.
// - 탐색은 O(n)이 소요된다. (선형시간)
// - 요소를 추가하거나 제거할 때는 O(1) (상수시간)이 소요된다.
// - singly linked list, doubly linked list, circular linked list가 존재한다.

// 3. 배열과 리스트의 차이점
// 3.1 메모리 차이
// - 배열의 메모리는 서로 연결되어 있는 형태의 메모리를 유지
// - 연결리스트의 메모리는 서로 퍼져있는 형태의 메모리를 포인터로 연결하여 메모리를 유지
// 3.2 배열 요소 삭제
// - 배열 요소를 삭제하는 경우, 삭제된 요소의 빈공간을 채워야하기 때문에 O(n) (선형시간)이 소요된다.
// 3.3 배열 요소 추가
// - 배열 요소를 추가하는 경우, 추가되는 위치를 제외한 나머지 뒷 번호의 요소들을 하나씩 밀어내기 위해 O(n) (선형시간)이 소요된다.
// 3.4 연결리스트 요소 삭제
// - 삭제할 요소를 선택하고, 삭제할 요소로 연결된 요소의 포인터를 삭제되지 않을 요소로 변경시킨 다음에 해당 요소를 삭제시킨다.
// - 이렇게 되면 O(1) (상수시간)이 소요된다.
// 3.5 연결리스트 요소 추가
// - 추가할 요소를 선택하고, 추가할 요소의 다음 위치에 올 요소에 포인터를 연결한 뒤, 그 이전에 올 요소의 포인터를 새로 추가된 요소로 지정한다.
// - 이렇게 되면 O(1) (상수시간)이 소요된다.

// 4. singly linked list (단일 연결리스트)
// head에서 tail까지 단방향으로 이어지는 연결리스트
// 가장 단순한 형태의 연결리스트이다.

// 4.1. 연결리스트이 핵심 로직
// - 요소 찾기
// : 헤드포인터에서 시작하여 첫번째 리스트의 데이터를 살펴본 뒤, 찾는 데이터가 아니면 해당 데이터의 포인터가 지칭하는 다음 리스트로 이동한다.
// 이러한 방식으로 원하는 데이터를 찾을 때까지 리스트의 데이터영역을 순차적으로 확인한다.
// 하나씩 데이터 영역을 대조하며 진행하기 때문에 연결리스트에서 요소를 찾는 일은 O(n) (선형시간)이 소요된다.
// - 요소 추가
// : O(1) (상수시간)이 소요된다.
// - 요소 삭제
// : O(1) (상수시간)이 소요된다.

// 5. doubly linked list (이중 연결리스트)
// 양방향으로 이어지는 연결리스트
// singly linked list보다 자료구조의 크기가 조금 더 크다

// 6. circular linked list (순환 연결리스트)
// singly 혹은 doubly linked list에서 tail이 head로 연결되는 연결리스트
// 메모리를 아껴쓸 수 있따. 원형 큐 등을 만들 때도 사용된다.

// 7. JS코드 구현

// 7.1. Singly Linked List

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  // 요소 찾기 // search 모드이기 때문에 O(n) (선형시간) 소요
  find(value) {
    // head 포인터를 현재 노드로 지정
    let currNode = this.head;
    // 현재 노드의 값이 찾는 값과 다르면
    while (currNode.value !== value) {
      // 현재 노드의 다음 노드를 현재 노드로 지정
      // 원하는 값을 찾을 때까지 순환하게 만듦
      currNode = currNode.next;
    }
    // 현재 노드의 값이 찾는 값과 같으면 현재 노드를 return
    return currNode;
  }

  // 요소 추가
  append(newValue) {
    // 입력된 값의 노드를 새로운 노드라고 선언
    const newNode = new Node(newValue);
    // head 포인터가 null이면
    if (this.head === null) {
      // head 포인터에 새로운 노드를 연결
      // tail 포인터에 새로운 노드를 연결
      this.head = newNode;
      this.tail = newNode;
    } else {
      // head 포인터가 어떤 노드를 가리키고 있으면 (head 포인터가 가르키는 값이 존재함)
      // tail 노드의 다음 노드를 새로운 노드로 연결
      // tail 노드를 새로운 노드로 선언하고 종료
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  // 요소 삽입
  insert(node, newValue) {
    // 새로 추가된 값을 하나의 노드로 생성
    const newNode = new Node(newValue);
    // 생성된 노드의 포인터를 삽입하고자 하는 요소의 노드로 지정
    newNode.next = node.next;
    // 삽입 위치 이전의 기존 노드의 다음을 삽입된 노드로 지정하여 종료
    node.next = newNode;
  }

  // 요소 제거 // search 모드이기 때문에 O(n) (선형시간) 소요
  // 삭제할 노드의 이전 노드를 함수의 입력값으로 지정하면 O(1) (상수시간) 소요
  remove(value) {
    // head포인터를 이전 노드로 선언
    let preNode = this.head;
    // 이전 노드(head포인터)가 가리키는 다음 데이터 값이 함수에 입력된 값과 다르면,
    while (preNode.next.value !== value) {
      // 다음 데이터 값을 이전 노드로 지정하여 search
      preNode = preNode.next;
    }
    // 삭제하고자 하는 값을 찾았으면,
    if (preNode.next !== null) {
      // 찾은 노드의 이전 노드의 포인터를 그 다음 다음 노드를 가리키게 설정한다.
      preNode.next = preNode.next.next;
    }
    // 굳이 삭제할 데이터를 제거하지 않는 이유는 해당 데이터는 포인터로 연결되어 있지 않기 때문에 garbage collection에 의해 알아서 메모리 상에서 제거됨
  }

  display() {
    let currNode = this.head;
    let displayString = '[';
    while (currNode !== null) {
      displayString += `${currNode.value}, `;
      currNode = currNode.next;
    }
    displayString = displayString.substring(0, displayString.length - 2);
    displayString += ']';
    console.log(displayString);
  }
}

const linkedList = new SinglyLinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.display();
linkedList.append(3);
linkedList.append(5);
linkedList.display();
console.log(linkedList.find(3));
linkedList.remove(3);
linkedList.display();
linkedList.insert(linkedList.find(2), 10);
linkedList.display();

// [1, 2, 3, 5]
// Node { value: 3, next: Node { value: 5, next: null } }
// [1, 2, 5]
// [1, 2, 10, 5]
