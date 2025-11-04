function solution(n, edge) {
  // 1. 그래프 형태를 만든다. 양방향이므로 각 인덱스에 연결된 노드들을 모두 넣는다.
  const graph = Array.from({ length: n }, (_) => []);

  for (const [i, j] of edge) {
    graph[i - 1].push(j - 1);
    graph[j - 1].push(i - 1);
  }

  // 2. bfs를 돌면서 visited를 현재 노드와 연결된 노드들을 현재 노드 인덱스 + 1로 할당한다.
  const visited = [1];
  const queue = [0];

  while (queue.length) {
    const node = queue.shift();

    for (const connectedNode of graph[node]) {
      if (!visited[connectedNode]) {
        visited[connectedNode] = visited[node] + 1;
        queue.push(connectedNode);
      }
    }
  }

  // 3. 최대값 개수 리턴
  const max = Math.max(...visited);

  return visited.filter((num) => num === max).length;
}