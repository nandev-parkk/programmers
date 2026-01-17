function solution(n, roads, sources, destination) {
  // 1. 각 지역별로 연결된 지역 계산한다.
  const graph = Array.from({ length: n + 1 }, () => []);

  for (const [a, b] of roads) {
    graph[a].push(b);
    graph[b].push(a);
  }

  // 2. 각 지역에 기본값을 -1로 채운 후 강철 부대 위치는 0으로 변경한다.
  const distance = Array(n + 1).fill(-1);

  distance[destination] = 0;

  // 3. queue에 destination을 넣고 역방향으로 인접 노드들을 방문하며 해당 지역의 distance 갱신
  let start = 0;
  const queue = [destination];

  while (start < queue.length) {
    const node = queue[start++];

    for (const next of graph[node]) {
      if (distance[next] === -1) {
        distance[next] = distance[node] + 1;
        queue.push(next);
      }
    }
  }

  return sources.map((source) => distance[source]);
}