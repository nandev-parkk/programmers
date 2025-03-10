function solution(msg) {
    const alphabet = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(65 + i),
  );

  const stack = [];
  const answer = [];

  for (let i = 0; i < msg.length; i++) {
    const currentWord = msg[i];

    stack.push(currentWord);

    if (alphabet.includes(stack.join(""))) {
      // 마지막 인덱스인 경우
      i === msg.length - 1 && answer.push(alphabet.indexOf(stack.join("")) + 1);

      continue;
    }

    // 새로운 문자열을 사전에 등록
    alphabet.push(stack.join(""));

    // 마지막 문자 제거
    stack.pop();

    // 마지막 문자를 제거한 문자열의 번호 출력
    answer.push(alphabet.indexOf(stack.join("")) + 1);

    // 배열 초기화
    stack.splice(0, stack.length);

    // 인덱스 변경
    i--;
  }

  return answer;
}