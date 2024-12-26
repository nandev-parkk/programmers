function solution(num_list) {
    let oddSum = 0;
  let evenSum = 0;

  num_list.forEach((num, i) => {
    if ((i + 1) % 2) {
      oddSum += num;
    } else if (!((i + 1) % 2)) {
      evenSum += num;
    }
  });

  return Math.max(oddSum, evenSum);
}