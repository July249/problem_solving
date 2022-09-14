// 이진 탐색

// 선형 탐색
// 순서대로 하나씩 찾는 탐색 알고리즘
// O(n) 시간 복잡도가 걸린다

// 이진 탐색
// 정렬 되어있는 요소들을 반씩 제외하며 찾는 알고리즘
// O(log N)만큼 시간 복잡도가 걸린다
// ex. up & down 나이 맞추기

// 이진 탐색의 특징
/* 
- 반드시 정렬이 되어있어야 사용할 수 있다
- 배열 혹은 이진 트리를 이용하여 구현할 수 있다
- O(log n) 시간 복잡도인 만큼 상당히 빠르다
*/

// [배열을 이용한 구현 방법]
/* 
Array: [10, 36, 45, 58, 77, 81, 93]
>> 45를 찾아라

1. 배열의 시작 부분을 left, 배열의 끝 부분을 right, 배열의 가운데 부분을 mid라고 한다 // mid = (left + right) / 2
2. mid 값인 58이 45보다 크므로 
- right = mid - 1 (mid 보다 한 칸 왼쪽으로 이동)
- mid = (left + right) / 2 (새롭게 mid를 설정) (여기서는 mid = 36)
3. mid 값인 36이 45보다 작으므로
- left = mid + 1 (mid 보다 한 칸 오른쪽으로 이동)
- mid = (left + right) / 2 (새롭게 mid를 설정) (여기서는 mid = 45)
4. left, mid, right 모두 45를 가리킴
*/
// 배열을 이용한 구현 방법에서는 요소를 추가, 삭제하는 경우 여전히 선형시간이 소요된다

// [이진 탐색 트리를 이용한 구현 방법]
// 이진 탐색 트리
// 이진 탐색을 위한 이진 트리로 왼쪽 서브 트리는 루트보다 작은 값이 모여있고 오른쪽 서브 트리는 루트보다 큰 값이 모여 있다

// [이진 탐색 트리 요소 추가]
/* 
루트 값을 기준으로 루트보다 작은 값이면 왼쪽으로, 루트보다 큰 값이면 오른쪽으로 값을 넣어준다
*/

// [이진 탐색 트리 요소 삭제]
// 1. 단말 정점(leaf node)을 삭제하는 경우
// 별다른 처리 없이 부모 정점과의 연결을 끊으면 된다
// 2. 삭제하고자 하는 정점이 하나의 서브트리를 가지는 경우
// 제거되는 정점의 부모 간선을 삭제하고자 하는 정점의 자식 정점으로 연결하면 된다
// 3. 삭제하고자 하는 정점이 두 개의 서브 트리를 가지는 경우
// 삭제하고자 하는 정점의 왼쪽 서브 트리의 가장 큰 값 혹은 오른쪽 서브 트리의 가장 작은 값과 삭제하고자 하는 정점의 값을 교체하면 된다
// 이 경우 교체된 정점의 좌우 자식이 없다면 제거되는 정점의 링크로 대체된다

// [이진 탐색 트리의 문제점]
/* 
- 최악의 경우 한쪽으로 편향된 트리가 될 수 있다
- 그런 경우 순차 탐색과 동일한 시간복잡도를 가진다
- 이를 해결하기 위해 AVL 트리, 레드-블랙 트리 자료구조를 이용할 수 있다
*/

// JS에서의 사용법
// 배열을 이용한 이진탐색 구현
/*
const array = [1, 1, 5, 124, 400, 599, 1004, 2876, 8712];

function binarySearch(array, findValue) {
  let left = 0;
  let right = array.length - 1;
  let mid = Math.floor((left + right) / 2);
  while (left < right) {
    if (array[mid] === findValue) {
      return mid;
    }
    if (array[mid] < findValue) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }

    mid = Math.floor((left + right) / 2);
  }

  return -1;
}

console.log(binarySearch(array, 2876)); // 7
console.log(binarySearch(array, 1)); // 1
console.log(binarySearch(array, 500)); // -1
*/

// Binary Search Tree
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return;
    }

    let currentNode = this.root;
    while (currentNode !== null) {
      if (currentNode.value < value) {
        if (currentNode.right === null) {
          currentNode.right = newNode;
          break;
        }
        currentNode = currentNode.right;
      } else {
        if (currentNode.left === null) {
          currentNode.left = newNode;
          break;
        }
        currentNode = currentNode.left;
      }
    }
  }

  has(value) {
    let currentNode = this.root;
    while (currentNode !== null) {
      if (currentNode.value === value) {
        return true;
      }

      if (currentNode.value < value) {
        currentNode = currentNode.right;
      } else {
        currentNode = currentNode.left;
      }
    }

    return false;
  }
}

const tree = new BinarySearchTree();
tree.insert(5);
tree.insert(4);
tree.insert(7);
tree.insert(8);
tree.insert(5);
tree.insert(6);
tree.insert(2);
console.log(tree.has(8)); // true
console.log(tree.has(1)); // false
