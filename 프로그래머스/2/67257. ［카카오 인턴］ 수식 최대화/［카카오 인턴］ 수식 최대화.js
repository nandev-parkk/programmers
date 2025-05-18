const calculate = (leftVal, rightVal, op) => {
  if (op === "+") return leftVal + rightVal;
  if (op === "-") return leftVal - rightVal;
  if (op === "*") return leftVal * rightVal;
};

function solution(expression) {
  // 1. 실제 들어있는 연산자를 추린다.
  const operator = ["+", "-", "*"];
  const includedOperator = [];

  for (const op of operator) {
    if (expression.includes(op)) includedOperator.push(op);
  }

  // 2. 문자열을 숫자 타입으로 변경해 배열에 넣는다.
  let nums = "";
  const convertedExpression = [];

  for (let i = 0; i < expression.length; i++) {
    const cv = expression[i];

    if (operator.includes(cv)) {
      convertedExpression.push(+nums);
      convertedExpression.push(cv);
      nums = "";
    } else {
      nums += cv;
    }

    if (i === expression.length - 1) {
      convertedExpression.push(+nums);
    }
  }

  // 3. 연산자 우선순위 전체 경우의 수를 구한다.
  const getPermutation = (arr, selectNum) => {
    const result = [];

    if (selectNum === 1) return arr.map((v) => [v]);

    arr.forEach((fixed, i, origin) => {
      const rest = [...origin.slice(0, i), ...origin.slice(i + 1)];
      const permutation = getPermutation(rest, selectNum - 1);
      const attached = permutation.map((v) => [fixed, ...v]);

      result.push(...attached);
    });

    return result;
  };

  const permutation = getPermutation(includedOperator, includedOperator.length);

  // 4. 경우의 수를 가지고 계산을 한다.
  let answer = 0;

  permutation.forEach((pm) => {
    let temp = [...convertedExpression];

    pm.forEach((op) => {
      let idx = temp.indexOf(op);

      while (temp.includes(op)) {
        const result = calculate(temp[idx - 1], temp[idx + 1], op);

        temp.splice(idx - 1, 3, result);

        idx = temp.indexOf(op);
      }
    });

    const convertedTemp = Math.abs(temp[0]);

    if (answer < convertedTemp) answer = convertedTemp;
  });

  return answer;
}