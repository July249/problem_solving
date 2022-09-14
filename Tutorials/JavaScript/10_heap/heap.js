// heap

// 우선 순위 큐
// FIFO(First In, First Out)인 큐와 달리 우선순위가 높은 요소가 먼저 나가는 큐
// Remark: 우선순위 큐는 자료구조가 아닌 개념이다

// 힙(heap)
// 이진 트리 형태를 가지며 우선순위가 높은 요소가 먼저 나가기 위해 요소가 삽입, 삭제될 때 바로 정렬되는 특징이 있다
// Caution! 우선순위 큐는 힙과 다르다!

// 힙의 특징
/* 
- 우선순위가 높은 요소가 먼저 나가는 특징을 가진다
- 루트가 가장 큰 값이 되는 최대 힙(Max Heap)과 루트가 가장 작은 값이 되는 최소 힙(Min Heap)이 있다
>> 쵀대, 최소 힙은 단순히 오름차순, 내림차순의 차이일 뿐이다
- 아쉽게도 자바스크립트에서는 직접 구현해서 사용해야한다
*/

// heap 요소 추가
// 1. 힙 요소 추가 알고리즘
/* 
- 요소가 추가될 때는 트리의 가장 마지막에 정점에 위치한다
- 추가 후 부모 정점보다 우선순위가 높다면 부모 정점과 순서를 바꾼다
- 이 과정을 반복하면 결국 가장 우선순위가 높은 정점이 루트가 된다
- 완전 이진 트리의 높이는 logN 이기 때문에 힙의 요소 추가 알고리즘은 O(logN) 시간복잡도를 가진다
*/

// heap 요소 제거
// 1. 힙 요소 제거 알고리즘
/* 
- 요소 제거는 루트 정점에서만 가능하다
- 루트 정점이 제거된 후 가장 마지막 정점이 루트에 위치한다
- 루트 정점의 두 자식 정점 중 더 우선순위가 높은 정점과 바꾼다
- 두 자식 정점이 우선순위가 더 낮을 때까지 반복한다
- 완전 이진 트리의 높이는 logN이기에 힙의 요소 제거 알고리즘은 O(logN) 시간복잡도를 가진다
*/

// JS에서의 사용법
class MaxHeap {
  constructor() {
    this.heap = [null];
  }

  // 1. 힙 요소 추가
  push(value) {
    this.heap.push(value);
    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor(currentIndex / 2);

    while (parentIndex !== 0 && this.heap[parentIndex] < value) {
      const temp = this.heap[parentIndex];
      this.heap[parentIndex] = value;
      this.heap[currentIndex] = temp;

      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex / 2);
    }
  }

  // 2. 힙 요소 제거
  pop() {
    // 루트 요소를 반환하기 위해 임의로 returnValue에 저장
    const returnValue = this.heap[1];
    // 루트 정점을 가장 마지막 정점으로 대체
    this.heap[1] = this.heap.pop();

    // 루트에서 하위레벨로 내려가기 위한 변수 선언
    let currentIndex = 1;
    let leftIndex = 2;
    let rightIndex = 2 * 1 + 1;
    // 하위 정점들이 현재 정점보다 우선순위가 낮은 경우 종료
    while (
      this.heap[currentIndex] < this.heap[leftIndex] ||
      this.heap[currentIndex] < this.heap[rightIndex]
    ) {
      if (this.heap[leftIndex] < this.heap[rightIndex]) {
        // 오른쪽 정점이 왼쪽 정점보다 우선순위가 큰 경우 오른쪽 정점을 현재 정점과 바꿈
        const temp = this.heap[currentIndex];
        this.heap[currentIndex] = this.heap[rightIndex];
        this.heap[rightIndex] = temp;
        currentIndex = rightIndex;
      } else {
        // 왼쪽 정점이 오른쪽 정점보다 우선순위가 큰 경우 왼쪽 정점을 현재 정점과 바꿈
        const temp = this.heap[currentIndex];
        this.heap[currentIndex] = this.heap[leftIndex];
        this.heap[leftIndex] = temp;
        currentIndex = leftIndex;
      }
      // 바뀐 정점에서 왼쪽 정점과 오른쪽 정점의 index를 다시 구한다
      leftIndex = currentIndex * 2;
      rightIndex = currentIndex * 2 + 1;
    }

    return returnValue;
  }
}

const heap = new MaxHeap();
heap.push(45);
heap.push(36);
heap.push(54);
heap.push(27);
heap.push(63);
console.log(heap.heap);
// [ null, 63, 54, 45, 27, 36 ]

const array = [];
array.push(heap.pop());
array.push(heap.pop());
array.push(heap.pop());
array.push(heap.pop());
array.push(heap.pop());
console.log(array);
// Result is [ 63, 54, 45, 36, 27 ] - Heap Sort!
