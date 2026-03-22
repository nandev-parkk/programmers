function solution(info, edges) {
  let answer = 0;
  const N = info.length;

  const graph = Array.from({ length: N }, () => []);

  for (const [parent, child] of edges) {
    graph[parent].push(child);
  }

  const dfs = (current, possible, sheep, wolf) => {
    answer = Math.max(answer, sheep);

    if (sheep <= wolf) return;

    const possibleNodes = [...possible, ...graph[current]];
    possibleNodes.splice(possibleNodes.indexOf(current), 1);

    for (const next of possibleNodes) {
      if (info[next]) dfs(next, possibleNodes, sheep, wolf + 1);
      else dfs(next, possibleNodes, sheep + 1, wolf);
    }
  };

  dfs(0, [0], 1, 0);

  return answer;
}