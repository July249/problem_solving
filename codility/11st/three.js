function solution(S) {
  const special_word = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_'];
  const password = [...S];
  const result = [0, 0, 0, 0]; // 소문자, 대문자, 숫자, 특수문자
  if (password.length < 6) {
    return false;
  } else {
    if (S.split(' ').join('').length == password.length) {
      for (let i = 0; i < password.length; i++) {
        if (password[i] >= 'a' && password[i] <= 'z') {
          result[0]++;
        }
        if (password[i] >= 'A' && password[i] <= 'Z') {
          result[1]++;
        }
        if (password[i] >= '0' && password[i] <= '9') {
          result[2]++;
        }
      }
      for (let i = 0; i < special_word.length; i++) {
        if (password.includes(special_word[i])) {
          result[3]++;
        }
      }
      return result.includes(0) ? false : true;
    } else {
      return false;
    }
  }
}

// 0. 빈 공간이 포함되어 있는가?
// 1. 최소 6자리 이상인가?
// 2. 최소 한게 이상의 특수문자 !@#$%^&*()_ 가 포함되었는가?
// 3. 최소 한개 이상의 대문자가 포함되었는가?
// 4. 최소 한개 이상의 소문자가 포함되었는가?
// 5. 최소 한개 이상의 숫자가 포함되었는가?

console.log(solution('FooBar123!')); // 0: true 1: true 2: true 3: true 4: true 5: true
console.log(solution('foobar123!')); // 0: true 1: true 2: true 3: false
console.log(solution('FooBar123')); // 0: true 1: true 2: false
console.log(solution('FObar! FObar!')); // 0: false
console.log(solution('FoO*')); // 0: true 1: false
