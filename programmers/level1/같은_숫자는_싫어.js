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
function solution(arr) {
  let result = [];
  arr.unshift(null);
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] !== arr[i]) {
      result.push(arr[i]);
    }
  }
  return result;
}
/*  
i   arr[i - 1]      arr[i]              condition (arr[i - 1] !== arr[i])     result
1   arr[0] = null   arr[1] = 4          true                                  [4]
2   arr[1] = 4      arr[2] = 4          false                                 [4]
3   arr[2] = 4      arr[3] = 3          true                                  [4, 3]
4   arr[3] = 3      arr[4] = 3          false                                 [4, 3]
*/
// 시작을 첫번째 인덱스의 요소를 배열에 넣고 시작함

console.log(solution([1, 1, 3, 3, 0, 1, 1])); // 답: [1,3,0,1]
console.log(solution([4, 4, 4, 3, 3])); // 답: [4,3]
