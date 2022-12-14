// 최대 공약수 구하기 알고리즘
function gcd(x, y) {
  var r = 1;
  if (x % y === 0) {
    return (r = y);
  } else {
    while (x % y !== 0) {
      r = x % y;
      x = y;
      y = r;
    }
    return r;
  }
}
