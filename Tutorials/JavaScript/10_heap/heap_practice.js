// 배상 비용 최소화

// 문제 설명
/* 
OO 조선소에서는 태풍으로 인한 작업지연으로 수주한 선박들을 기한 내에 완성하지 못할 것이 예상됩니다. 기한 내에 완성하지 못하면 손해 배상을 해야 하므로 남은 일의 작업량을 숫자로 매기고 배상비용을 최소화하는 방법을 찾으려고 합니다.
배상 비용은 각 선박의 완성까지 남은 일의 작업량을 제곱하여 모두 더한 값이 됩니다.

조선소에서는 1시간 동안 남은 일 중 하나를 골라 작업량 1만큼 처리할 수 있습니다. 조선소에서 작업할 수 있는 N 시간과 각 일에 대한 작업량이 담긴 배열(works)이 있을 때 배상 비용을 최소화한 결과를 반환하는 함수를 만들어 주세요. 예를 들어, N=4일 때, 선박별로 남은 일의 작업량이 works = [4, 3, 3]이라면 배상 비용을 최소화하기 위해 일을 한 결과는 [2, 2, 2]가 되고 배상 비용은 2^(2) + 2^(2) + 2^(2) = 12가 되어 12를 반환해 줍니다.

[제한사항]
- 일할 수 있는 시간 N : 1,000,000 이하의 자연수
- 배열 works의 크기: 1,000 이하의 자연수
- 각 일에 대한 작업량 : 1,000 이하의 자연수

[입출력 예]
N | works | result
4 | [4, 3, 3] | 12
2 | [3, 3, 3] | 17

[입출력 예 설명]
배상 비용을 최소화하기 위해 일을 한 결과는 [2, 2, 3]가 되고 배상 비용은 2^(2) + 2^(2) + 3^(2) = 17가 되어 17을 반환하여 준다
*/

// 문제 유형 파악하기
/* 
문제 설명 중 핵심 부분은 역시 배상 비용을 계산하는 부분입니다
배상 비용은 각 요소를 제곱하게 되므로 최대한 각 요소를 골고루 처리하는 것이 가장 배상 비용을 최소화할 수 있는 방법입니다
그러기 위해서는 매 루프마다 가장 큰 작업을 찾아서 처리해야합니다
이때 가장 큰 작업을 찾기 위한 방법은 총 3가지 있습니다

1. 매 루프마다 Math.max 함수를 호출한다
2. 매 루프마다 정렬한다
3. heap을 이용한다

1번은 매 루프마다 O(N) 시간 복잡도가 소요된다
2번은 O(NlogN)이 소요된다
3번은 O(logN) 만이 소요된다

사실 매번 큰 값 혹은 작은 값을 알아야 한다면 무조건 heap을 사용하는 것이 좋다
*/

class MaxHeap {
  constructor() {
    this.heap = [null];
  }

  push(value) {
    // 입력된 값을 heap에 추가
    this.heap.push(value);
    // heap의 마지막을 현재 index로 지정
    let currentIndex = this.heap.length - 1;
    // 부모 index는 현재 index의 level로 지정
    let parentIndex = Math.floor(currentIndex / 2);

    // 부모 index가 0이 아니고, 부모 index의 heap에 저장된 값이 입력된 값(value)보다 작은 경우 loop를 시작
    while (parentIndex !== 0 && this.heap[parentIndex] < value) {
      // 부모 index의 heap에 저장된 값을 temp에 저장
      const temp = this.heap[parentIndex];
      // 부모 index의 heap에 value를 할당
      this.heap[parentIndex] = value;
      // 부모 index의 heap 값이 value보다 작으므로
      // 현재 index의 heap(heap의 끝부분)에 temp를 할당
      // (즉, 부모 index의 heap에 저장된 값을 하위 level로 내림)
      this.heap[currentIndex] = temp;

      // 현재 index를 부모 index로 변경
      // (즉, 현재 index의 level을 한단계 올림)
      currentIndex = parentIndex;
      // 변경된 현재 index에 대한 level을 부모 index로 새롭게 지정
      parentIndex = Math.floor(currentIndex / 2);
    }
  }

  pop() {
    // 루트 정점을 제거
    // (루트 요소를 반환하기 위해 임의로 returnValue에 저장)
    const returnValue = this.heap[1];
    // 가장 마지막 정점을 루트로 할당
    this.heap[1] = this.heap.pop();

    // 루트에서 하위레벨로 내려가기 위한 변수 선언
    let currentIndex = 1;
    let leftIndex = 2;
    let rightIndex = 2 * 1 + 1;
    // 하위 정점들이 현재 정점보다 우선순위가 높은 경우 루프를 시작
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

// My Solution : 예제 테스트 2건 통과 / 제출 결과 - 정확성 52.4, 효율성 30.1, 합계 82.5/100 (테스트 12개 중 9개 통과)
/* function solution(no, works) {
  // solution(4, [4, 3, 3])
  const heap = new MaxHeap();
  const arr = [];
  let cost = 0;

  // create heap
  for (const work of works) {
    heap.push(work);
  }
  // console.log(heap); // MaxHeap { heap: [ null, 4, 3, 3 ] }
  // console.log(heap.pop()); // 4
  while (no > 0) {
    let rootValue = heap.pop();
    rootValue -= 1;
    heap.push(rootValue);
    no -= 1;
  }
  // console.log(heap); // MaxHeap { heap: [ null, 2, 2, 2 ] }
  for (let i = 0; i < works.length; i++) {
    arr.push(heap.pop());
  }
  // console.log(arr); // [ 2, 2, 2 ]

  for (const i of arr) {
    cost += i ** 2;
  }
  console.log(cost); // 12
}

solution(4, [4, 3, 3]); // 12
solution(2, [3, 3, 3]); // 17 */

// Answer Sheet
class MaxHeap {
  constructor() {
    this.heap = [null];
  }

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

  pop() {
    // Edge Case
    if (this.heap.length === 2) return this.heap.pop(); // 루트 정점만 남은 경우

    const returnValue = this.heap[1];
    this.heap[1] = this.heap.pop();

    let currentIndex = 1;
    let leftIndex = 2;
    let rightIndex = 3;
    while (
      this.heap[currentIndex] < this.heap[leftIndex] ||
      this.heap[currentIndex] < this.heap[rightIndex]
    ) {
      if (this.heap[leftIndex] < this.heap[rightIndex]) {
        const temp = this.heap[currentIndex];
        this.heap[currentIndex] = this.heap[rightIndex];
        this.heap[rightIndex] = temp;
        currentIndex = rightIndex;
      } else {
        const temp = this.heap[currentIndex];
        this.heap[currentIndex] = this.heap[leftIndex];
        this.heap[leftIndex] = temp;
        currentIndex = leftIndex;
      }
      leftIndex = currentIndex * 2;
      rightIndex = currentIndex * 2 + 1;
    }

    return returnValue;
  }
}

function solution(no, works) {
  // Edge case
  // 모든 작업의 합보다 no가 크면 배상 비용을 낼 필요가 없다.
  if (works.reduce((a, b) => a + b) <= no) {
    return 0;
  }

  // max heap 구성
  const heap = new MaxHeap();
  for (const work of works) {
    heap.push(work);
  }

  // no만큼 루프 돌면서 가장 큰 값을 빼서 처리 후 다시 push
  for (let i = 0; i < no; i += 1) {
    heap.push(heap.pop() - 1);
  }

  // 남은 요소에 제곱한 값들의 합을 구한 후 반환
  return heap.heap.reduce((a, b) => a + b * b);
}
