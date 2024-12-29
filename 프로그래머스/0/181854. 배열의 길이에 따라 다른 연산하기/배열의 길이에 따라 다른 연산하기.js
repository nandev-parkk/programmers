function solution(arr, n) {
const isOdd = (num) => (num % 2 ? true : false);

  return arr.map((num, i) => {
    if (isOdd(arr.length)) {
      return !isOdd(i) ? num + n : num;
    } else {
      return isOdd(i) ? num + n : num;
    }
  });
}