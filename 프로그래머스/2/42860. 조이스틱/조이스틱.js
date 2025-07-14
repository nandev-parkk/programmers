function solution(name) {
  let answer = 0;

  // 처음부터 끝까지 이동했을 때의 최소 횟수
  let min = name.length - 1;

  for (let i = 0; i < name.length; i++) {
    const currentAlphabet = name.charCodeAt(i);

    // 26개의 알파벳 중 가운데인 N보다 작은경우 A -> B 방향으로 해당 알파벳까지 이동한 거리를 answer에 추가
    if (currentAlphabet < 78) answer += currentAlphabet % 65;
    // 그 외에는 A -> Z 방향으로 해당 알파벳까지 이동한 거리를 answer에 추가
    else answer += 91 - currentAlphabet;

    // A를 찾는 작업
    let nextIndex = i + 1;

    while (nextIndex < name.length && name.charCodeAt(nextIndex) === 65) {
      nextIndex++;
    }

    min = Math.min(
      min,
      // A 앞에 있는 알파벳이 뒤에 있는 알파벳보다 적은 경우 (BBAACCC)
      // i * 2: A를 만나 다시 처음으로 돌아가는 횟수
      // name.length - nextIndex: 처음 알파벳에서 A가 끝난 다음 단어까지 가는 횟수
      i * 2 + name.length - nextIndex,
      // A 앞에 있는 알파벳이 뒤에 있는 알파벳보다 많은 경우 (BBBAACC)
      // (name.length - nextIndex) * 2: A가 끝난 다음 단어부터 비교하고 다시 처음으로 돌아오는 횟수
      // i: 처음으로 돌아온 후 오른쪽으로 이동한 횟수
      i + (name.length - nextIndex) * 2,
    );
  }

  answer += min;

  return answer;
}