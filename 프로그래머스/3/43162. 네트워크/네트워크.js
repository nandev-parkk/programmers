function solution(n, computers) {
  let answer = 0;
  const visited = Array.from({ length: n }, () => false);

  const dfs = (idx) => {
    visited[idx] = true;

    for (let i = 0; i < n; i++) {
      // 해당 컴퓨터와 연결되어 있고 방문하지 않았던 컴퓨터라면 계속 dfs
      if (computers[idx][i] && !visited[i]) dfs(i);
    }
  };

  for (let i = 0; i < n; i++) {
    if (visited[i]) continue;

    dfs(i);
    answer++;
  }

  return answer;
}