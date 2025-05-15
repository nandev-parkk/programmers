// 올바른 괄호 문자열인지 체크
const isRightParentheses = (str) => {
  // str이 빈 문자열이거나 )로 시작하거나 끝이 (면 올바르지 않은 괄호 문자열이므로 false 리턴
  if (!str || str[0] === ")" || str[str.length - 1] === "(") return false;

  const obj = {};

  for (const char of str) {
    obj[char] = (obj[char] || 0) + 1;
  }

  return obj["("] === obj[")"];
};

function solution(p) {
  // 1. 빈 문자열이면 리턴
  if (!p) return p;

  // 2. u와 v 분리
  let u, v;
  const obj = {};

  for (let i = 0; i < p.length; i++) {
    const cv = p[i];
    obj[cv] = (obj[cv] || 0) + 1;

    if (obj["("] === obj[")"]) {
      u = p.substring(0, i + 1);
      v = p.substring(i + 1);
      break;
    }
  }

  if (isRightParentheses(u)) {
    return u + solution(v);
  } else {
    let answer = "";
    answer = `(${solution(v)})`;

    for (let i = 1; i < u.length - 1; i++) {
      u[i] === "(" ? (answer += ")") : (answer += "(");
    }

    return answer;
  }
}