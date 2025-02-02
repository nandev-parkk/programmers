function solution(s) {
  // 여는 괄호가 포함되어 있지 않으면 0 리턴
  if (!s.includes("(") && !s.includes("{") && !s.includes("[")) return 0;

  let count = 0;

  // s 배열화
  const convertedString = [...s];

  for (let i = 0; i < convertedString.length; i++) {
    // 변경된 s의 0번째 인덱스가 ), }, ]인 경우 continue
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
    let idx = 0;

    for (let j = 0; j <= convertedString.length; j++) {
      if (j < convertedString.length) stack.push(convertedString[j]);

      if (stack.length > 1) {
        if (
          (stack[idx] === "(" && stack[idx + 1] === ")") ||
          (stack[idx] === "{" && stack[idx + 1] === "}") ||
          (stack[idx] === "[" && stack[idx + 1] === "]")
        ) {
          stack.splice(idx, 2);

          idx && idx--;
        } else {
          idx++;
        }
      }
    }

    !stack.length && count++;
    convertedString.push(convertedString.shift());
  }

  return count;
}