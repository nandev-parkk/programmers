function solution(binomial) {
  const splitBinomial = binomial.split(" ");
  const leftOperand = +splitBinomial[0];
  const rightOperand = +splitBinomial[2];
  const operator = splitBinomial[1];

  if (operator === "+") {
    return leftOperand + rightOperand;
  } else if (operator === "-") {
    return leftOperand - rightOperand;
  } else if (operator === "*") {
    return leftOperand * rightOperand;
  }
}