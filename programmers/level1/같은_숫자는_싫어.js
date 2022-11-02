// 방법1
// 자바스크립트 엔진에 의해 마지막 비교에서 undefined와 비교하는 일이 발생
// 동일한 숫자가 여러 개 나올 때, push가 이루어지지 않다가 다른 숫자가 나왔을 때 이전 숫자가 push 됨
// 마지막까지 비교해야하기 때문에 undefined(존재하지 않는 인덱스의 요소값)까지 고려되어짐
/* function solution(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      result.push(arr[i]);
    }
  }
  return result;
} */
/*  
i   arr[i]      arr[i+1]              condition (arr[i] !== arr[i + 1])     result
0   arr[0] = 4  arr[1] = 4            false                                 []
1   arr[1] = 4  arr[2] = 4            false                                 []
2   arr[2] = 4  arr[3] = 3            true                                  [4]
3   arr[3] = 3  arr[4] = 3            false                                 [4]
4   arr[4] = 3  arr[5] = undefined    true                                  [4, 3]
*/
// 시작을 빈 배열로 시작함

// 방법2
// 위 존재하지 않는 인덱스까지 비교하는 문제와 초반에 동일한 숫자가 나올 때 push가 이루어지지 않는 문제를 해결하기 위해서
// 의도적으로 주어지는 배열 arr의 맨 앞에 null 값을 추가하여 인덱스 1번부터 push가 이루어지게 만들었음
/* function solution(arr) {
  let result = [];
  arr.unshift(null);
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] !== arr[i]) {
      result.push(arr[i]);
    }
  }
  return result;
} */
/*  
i   arr[i - 1]      arr[i]              condition (arr[i - 1] !== arr[i])     result
1   arr[0] = null   arr[1] = 4          true                                  [4]
2   arr[1] = 4      arr[2] = 4          false                                 [4]
3   arr[2] = 4      arr[3] = 3          true                                  [4, 3]
4   arr[3] = 3      arr[4] = 3          false                                 [4, 3]
*/
// 시작을 첫번째 인덱스의 요소를 배열에 넣고 시작함

// 방법3 - 페어프로그래밍 시간에 다루지는 않았으나 Stack 자료구조를 이용하여 구현하는 방법
// Stack은 LIFO(Last In First Out)의 특징을 가진 선형 자료구조입니다.
// 바닥이 막힌 상자를 생각하면 개념을 연상하기 쉽습니다.
// 여기서는 연결리스트(linked list)를 이용하여 구현하였습니다.
/* class Node {
  constructor(value) {
    // 생성자에 value 객체 생성하고 해당 객체는 value를 가지게 설정
    this.value = value;
    // 생성자에 next 객체를 생성하고 노드의 포인터는 아무것도 가리키지 않음
    this.next = null;
  }
}

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

function solution(arr) {
  let answer = [];

  const stack = new Stack(); // 클래스 Stack을 이용해서 stack 생성

  stack.push(arr[0]); // arr[0]을 stack에 넣는다

  for (let i = 1; i < arr.length; i++) {
    // stack의 맨 위에 있는 값과 arr[i]의 값이 다르면
    if (stack.top.value !== arr[i]) {
      stack.push(arr[i]); // stack 맨 위에 arr[i] 값을 쌓는다
    }
  }

  const sizeOfStack = stack.size; // stack의 크기를 변수에 할당

  // stack의 크기만큼 순회하는 for문
  for (let i = 0; i < sizeOfStack; i++) {
    const topOfStack = stack.pop(); // stack의 맨 위에 있는 값을 제거하고 제거된 값을 topOfStack에 저장
    answer.unshift(topOfStack); // answer 배열에 왼쪽에서 오른쪽으로 하나씩 채워나감
  }

  return answer;
} */

// 방법4
function solution(arr) {
  return arr.filter((val, index) => val != arr[index + 1]);
}

// 시도는 하였으나 올바르지 않은 방법들
/*
- for (let i of arr) {}
	=> 이 방법을 이용하는 경우 이웃하는 배열의 요소를 비교할 수 없게 된다.
- for (let i in arr) {}
	=> 이 방법을 이용하는 경우 이웃하는 배열의 요소를 얻어낼 수 없었습니다. 
		 왜냐하면 배열의 프로퍼티 키값은 문자열이기 때문입니다.
- Set 객체
	=> 이 방법은 중복되는 요소를 제거할 수 있다는 장점이 있지만, 첫번째 예제인 [1, 1, 3, 3, 0, 1, 1] 배열에 대한 결과값으로 [1, 3, 0]을 만듭니다.
		 따라서 Set 객체을 이용하는 방법은 이 문제를 풀이함에 있어 올바르지 않은 접근이라고 보여집니다.
*/

console.log(solution([1, 1, 3, 3, 0, 1, 1])); // 답: [1,3,0,1]
console.log(solution([4, 4, 4, 3, 3])); // 답: [4,3]
