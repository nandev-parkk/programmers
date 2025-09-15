function solution(begin, target, words) {
  // 변환할 수 없는 경우
  if (!words.includes(target)) return 0;

  const checkDiff = (word1, word2) => {
    let count = 0;

    for (let i = 0; i < word1.length; i++) {
      if (word1[i] === word2[i]) continue;

      count++;

      if (count > 1) return false;
    }

    return true;
  };

  let answer = 0;

  const visited = Array.from({ length: words.length }, () => false);
  const queue = [[begin, 0]];

  while (queue.length) {
    const [currentWord, step] = queue.shift();

    if (currentWord === target) return step;

    for (let i = 0; i < words.length; i++) {
      if (checkDiff(currentWord, words[i]) && !visited[i]) {
        queue.push([words[i], step + 1]);
      }
    }
  }

  return answer;
}