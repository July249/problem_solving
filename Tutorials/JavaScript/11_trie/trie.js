// 트라이 (Trie)

// 문자열을 저장하고 효율적으로 탐색하기 위한 트리 형태의 자료구조

// 트라이의 특징
/* 
- 검색어 자동완성, 사전 찾기 등에 응용될 수 있다
- 문자열을 탐색할 때 단순하게 비교하는 것보다 효율적으로 찾을 수 있다
- L이 문자열의 길이일 때 탐색, 삽입은 O(l)만큼 소요된다
- 대신 각 정점이 자식에 대한 링크를 전부 가지고 있기에 저장 공간을 더 많이 사용한다
*/

// 트라이 생성하기
// 1. 트라이 구조
/* 
- 루트는 비어 있다
- 각 간선(링크)은 추가될 문자를 키로 가진다
- 각 정점은 이전 정점의 값 + 간선의 키를 값으로 가진다
- 해시 테이블과 연결 리스트를 이용하여 구현할 수 있다
*/

// JS에서의 사용법
// 트라이 구성 (인접 리스트의 형태로 구현)
class Node {
  constructor(value = '') {
    this.value = value;
    this.children = new Map();
  }
}

class Trie {
  constructor() {
    // root에 빈 node 생성
    this.root = new Node();
  }

  // insert 함수는 문자열을 입력 받는다
  insert(string) {
    // 현재 node를 root로 지정
    let currentNode = this.root;

    // 입력 받은 문자열의 문자에 대하여 반복문을 돌린다
    for (const char of string) {
      if (!currentNode.children.has(char)) {
        // 현재 node의 자식에 char를 넣어주고, 현재 node에 저장된 값에 char를 더해준 node를 새로 생성한다
        currentNode.children.set(char, new Node(currentNode.value + char));
        // console.log(currentNode.children);
      }
      // 현재 node는 현재 node의 자식이 가지고 있는 char값들을 가져온다
      currentNode = currentNode.children.get(char);
      console.log(currentNode);
    }
  }

  has(string) {
    let currentNode = this.root;

    // 입력 받은 문자열의 문자에 대하여 반복문을 돌린다
    for (const char of string) {
      if (!currentNode.children.has(char)) {
        return false;
      }
      // 현재 node는 현재 node의 자식이 가지고 있는 char값들을 가져온다
      currentNode = currentNode.children.get(char);
    }
    return true;
  }
}

const trie = new Trie();
trie.insert('cat');
trie.insert('can');
console.log(trie.has('cat')); // true
console.log(trie.has('can')); // true
console.log(trie.has('cap')); // false
