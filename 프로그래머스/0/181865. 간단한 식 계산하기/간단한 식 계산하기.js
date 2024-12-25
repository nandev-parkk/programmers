function solution(binomial) {
  const operators = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
  };
  const [a, op, b] = binomial.split(" ");

  return operators[op](+a, +b);
}