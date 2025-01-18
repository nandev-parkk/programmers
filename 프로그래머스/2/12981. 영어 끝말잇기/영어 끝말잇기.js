function solution(n, words) {
  const answer = [0, 0];
  const order = {};

  for (let i = 0; i < words.length; i++) {
    const currentWord = words[i];
    const prevWord = words[i - 1];

    // index + 1 % n으로 현재 사람 계산
    const currentPerson = !((i + 1) % n) ? n : (i + 1) % n;

    // 현재 사람이 몇번 플레이 했는지 계산
    order[currentPerson] = (order[currentPerson] || 0) + 1;

    // 현재 단어가 words에 이미 포함되어있는지 확인
    const isInclude = words.indexOf(currentWord) !== i;

    // 현재 단어가 이전 단어의 끝 글자로 시작하는지 확인
    const isStartPrevWord =
      i && prevWord.charAt(prevWord.length - 1) === currentWord.charAt(0);

    if (isInclude || (isStartPrevWord !== 0 && !isStartPrevWord)) {
      answer[0] = currentPerson;
      answer[1] = order[currentPerson];

      break;
    }
  }

  return answer;
}