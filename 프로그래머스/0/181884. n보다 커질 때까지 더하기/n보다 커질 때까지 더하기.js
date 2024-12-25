function solution(numbers, n) {
  let sum = 0;

  numbers.forEach((num) => {
    if (sum > n) return;

    sum += num;
  });

  return sum;
}