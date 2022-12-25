function solution(a, b) {
  return ((a + b) * (Math.abs(b - a) + 1)) / 2;
}

// my solution
/**
 * function solution(a, b) {
    let result = 0;
    let arr = [];
    if (b < a) {
        for (let i = b; i <= a; i++) {
            arr.push(i);
        }
    } else {
        for (let i = a; i <= b; i++) {
            arr.push(i);
        }
    }
    for (let j = 0; j < arr.length; j++) {
        result += arr[j];
    }
    return result;
}
 */
