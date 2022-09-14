// 트리

// 방향 그래프의 일종으로 정점ㅇㄹ 가리키는 간선이 하나 밖에 없는 구조를 가지고 있다
// 나무와 같은 구조를 가지고 있다
// 하나의 루트에서 하위 노드로 뻗어 나가는 모습을 가지고 있다

// 용어
// 최상위 정점을 루트(Root)
// 중간 단계의 정점을 노드(Node)
// 최하위 정점을 리프노드(leaf Node)
// 레벨(level) === 루트(root)로부터의 깊이
// 한 정점에서 하위 레벨로 뻗어지는 간선 === (#num) Degree

// 주로 회사의 조직도, 디렉터리 구조에 사용된다

// 트리의 특징
/* 
- 루트 정점을 제외한 모든 정점은 반드시 하나의 부모 정점을 가진다
- 정점이 N개인 트리는 반드시 N-1개의 간선을 가진다
- 루트에서 특정 정점으로 가는 경로는 유일하다
*/

// 이진 트리
// 이진 트리는 각 정점이 최대 2개의 자식을 가지는 트리를 의미한다

/* 
1. 이진 트리
2. 완전 이진 트리 (leaf node를 제외한 모든 정점이 채워진 경우)
3. 포화 이진 트리 (leaf node까지 모든 정점이 채워진 경우)
4. 편향 트리 (단방향으로만 정점이 이어지는 경우)
*/

// 이진 트리의 특징
/* 
1. 정점이 N개인 이진트리는 최악의 경우 높이가 N이 될 수 있다
2. 정점이 N개인 포화 또는 완전 이진 트리의 높이는 logN이다
3. 높이가 h인 포화 이진 트리는 2^(h) - 1개의 정점을 가진다
4. 일반적인 이진 트리를 사용하는 경우는 많지 않다
>> 다음 자료구조에 응용된다
- 이진 탐색 트리
- AVL 트리
- 레드 블랙 트리 
*/

// 트리의 구현 방법
// 그래프와 마찬가지로 인접 행렬, 인접 리스트 두가지 방식으로 트리를 표현할 수 있다
// 배열 혹은 요소에 링크가 2개 존재하는 연결 리스트로 구현할 수 있다

// JS에서의 사용법
// 이진 트리 (Array)

// 0번 index는 편의를 위해 비워둔다
// Left = Index * 2
// Right = Index * 2 + 1
// Parent = floor(Index / 2)
/* 
const tree = [
  undefined,
  // 1
  9,
  // 1*2, 1*2+1
  3, 8,
  // 2*2, 2*2+1, 3*2, 3_2+1
  2, 5, undefined, 7,
  // 4*2, 4*2+1, 5*2, 5*2+1
  undefined, undefined, undefined, 4
]; 
*/

// 이진 트리 (Linked List)
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(node) {
    this.root = node;
  }

  display() {
    // level Order
    const queue = new Queue();
    queue.enqueue(this.root);
    while (queue.size) {
      const currentNode = queue.dequeue();
      console.log(currentNode.value);
      if (currentNode.left) queue.enqueue(currentNode.left);
      if (currentNode.right) queue.enqueue(currentNode.right);
    }
  }
}

const tree = new Tree(new Node(9));
tree.root.left = new Node(3);
tree.root.right = new Node(8);
tree.root.left.left = new Node(2);
tree.root.left.right = new Node(5);
tree.root.right.right = new Node(7);
tree.root.left.right = new Node(4);
