function solution(number, k) {
  const sortedNumber = [...number].sort();
  sortedNumber.splice(0, k);

  return sortedNumber.reverse().join("");
}