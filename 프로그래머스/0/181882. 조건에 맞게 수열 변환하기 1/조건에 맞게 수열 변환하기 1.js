function solution(arr) {
  return arr.map((num) => {
    if (num % 2 === 0 && num >= 50) {
      return num / 2;
    } else if (num % 2 !== 0 && num < 50) {
      return num * 2;
    } else return num;
  });
}