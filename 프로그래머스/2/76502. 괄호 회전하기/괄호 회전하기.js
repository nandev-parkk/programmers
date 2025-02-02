function solution(s) {
  // 여는 괄호가 포함되어 있지 않으면 0 리턴
  if (!s.includes("(") && !s.includes("{") && !s.includes("[")) return 0;

  // for문을 돌아서 돌린다.
  const convertedString = [...s];

  let count = 0;

  for (let i = 0; i < s.length; i++) {
    // 변경된 s의 0번째 인덱스가 ), }, ]인 경우 X
    if (
      convertedString[0] === ")" ||
      convertedString[0] === "}" ||
      convertedString[0] === "]"
    ) {
      convertedString.push(convertedString.shift());
      continue;
    }
    // 그렇지 않은 경우
    const stack = [];
    let order = 0;

    for (let j = 0; j <= convertedString.length; j++) {
      if (j < convertedString.length) {
        stack.push(convertedString[j]);
      }

      if (stack.length > 1) {
        if (
          (stack[order] === "(" && stack[order + 1] === ")") ||
          (stack[order] === "{" && stack[order + 1] === "}") ||
          (stack[order] === "[" && stack[order + 1] === "]")
        ) {
          stack.splice(order, 2);

          order && order--;
        } else if (
          (stack[order] === "(" && stack[order + 1] !== ")") ||
          (stack[order] === "{" && stack[order + 1] !== "}") ||
          (stack[order] === "[" && stack[order + 1] !== "]")
        ) {
          order++;
        }
      }
    }

    !stack.length && count++;
    convertedString.push(convertedString.shift());
  }

  return count;
}