function solution(n) {
  const F_0 = F(0);
  const F_1 = F(1);
  if (n === 2) {
    return F_0 + F_1;
  }
  let i = 2;
  while (i < n) {
    F(n) = F()
  }
  return F(n);
}

console.log(solution(3)); // 2
/* 
n       F(n)                            return
0       F(0) = 0                        0
1       F(1) = 1                        1
2       F(2) = F(1) + F(0)              1

3       F(3) = F(2) + F(1) = 1 + 1      2
4       F(4) = F(3) + F(2) = 2 + 1      3


n       F(n)                            return
5       F(5) = F(4) + F(3)              F(4) + F(3) => 
4       F(4) = F(3) + F(2)              F(3) + F(2) => F(3) + 1 => 2 + 1 = 3
3       F(3) = F(2) + F(1)              F(2) + F(1) => 1 + 1 = 2                            

*/



console.log(solution(5)); // 5