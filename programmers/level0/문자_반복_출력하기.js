function solution(my_string, n) {
  var answer = '';
  var tripleArr = my_string.split('').map((v) => {
    while (v.length < n) {
      v += v[0];
    }
    return v;
  });
  answer = tripleArr.join('');
  return answer;
}

console.log(solution('hello', 3)); // hhheeellllllooo
