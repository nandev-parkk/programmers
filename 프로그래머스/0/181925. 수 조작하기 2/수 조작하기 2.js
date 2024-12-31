function solution(numLog) {
const operators = {
    1: "w",
    "-1": "s",
    10: "d",
    "-10": "a",
  };

  let answer = "";

  for (let i = 0; i < numLog.length; i++) {
    if (!i) continue;

    // 현재 인덱스의 값에서 이전 인덱스의 값을 뺀 값에 따라 문자열 리턴
    const value = numLog[i] - numLog[i - 1];
    answer += operators[value];
  }

  return answer;
}