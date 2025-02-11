function solution(k, dungeons) {
  const visited = Array.from({ length: dungeons.length }, () => false);
  let answer = 0;

  function dfs(k, count) {
    for (const i in dungeons) {
      const [min, consume] = dungeons[i];

      if (!visited[i] && k >= min) {
        visited[i] = true;
        dfs(k - consume, count + 1);
        visited[i] = false;
      }
    }

    if (answer < count) answer = count;
  }

  dfs(k, 0);

  return answer;
}