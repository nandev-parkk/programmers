function solution(gems) {
  // gems에서 중복된 요소 제거
  const allGems = new Set(gems).size;

  // end는 allGems 길이로 시작
  let [start, end] = [0, 0];
  const answer = [0, gems.length - 1];
  const map = new Map();

  // 뭘 기준으로 start, end를 움직이지?
  // 모두 포함하는 구간이 형성될 때까지 end를 늘리다가 형성되면 start를 올리고 다시 형성이 안되면 end를 올리고?

  while (end < gems.length) {
    const endGem = gems[end];

    map.set(endGem, (map.get(endGem) || 0) + 1);

    while (map.size === allGems) {
      if (end - start < answer[1] - answer[0])
        [answer[0], answer[1]] = [start, end];

      const startGem = gems[start];
      map.set(startGem, map.get(startGem) - 1);
      if (!map.get(startGem)) map.delete(startGem);
      start++;
    }

    end++;
  }

  return [answer[0] + 1, answer[1] + 1];
}