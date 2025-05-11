class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(node, hour) {
    this.queue.push({ node, hour });
    this.queue.sort((a, b) => a.hour - b.hour);
  }

  dequeue() {
    return this.queue.shift();
  }

  isEmpty() {
    return !this.queue.length;
  }
}

function solution(N, road, K) {
  // 그래프 형태 만들기
  const graph = {};

  for (const [a, b, c] of road) {
    const adjacentNode1 = { node: b, hour: c };

    graph[a] = a in graph ? [...graph[a], adjacentNode1] : [adjacentNode1];

    const adjacentNode2 = { node: a, hour: c };

    graph[b] = b in graph ? [...graph[b], adjacentNode2] : [adjacentNode2];
  }

  const dijkstra = (graph, startNode) => {
    const pq = new PriorityQueue();

    // start를 제외한 노드의 초기값은 최초 비교를 위해 Infinity로 설정.
    const hours = {};

    Object.keys(graph).forEach((node) => {
      hours[node] = Infinity;
    });

    // 시작점은 비교할 필요가 없으므로 0으로 재할당
    hours[startNode] = 0;

    // 시작점을 queue에 추가
    pq.enqueue(startNode, 0);

    // 큐에 값이 있으면 while문 반복
    while (!pq.isEmpty()) {
      const { node: currentNode } = pq.dequeue();

      // 현재 노드의 인접 노드들의 시간을 계산
      graph[currentNode].forEach(
        ({ node: adjacentNode, hour: adjacentNodeHour }) => {
          // 현재 노드의 시간 + 인접 노드의 시간
          const hour = hours[currentNode] + adjacentNodeHour;

          // 계산한 시간이 인접 노드의 기존 시간보다 작으면 인접 노드의 시간을 계산한 시간으로 최신화
          if (hour < hours[adjacentNode]) {
            hours[adjacentNode] = hour;
            pq.enqueue(adjacentNode, hour);
          }
        },
      );
    }

    const mappedHours = Object.entries(hours)
      .filter(([_, hour]) => hour <= K)
      .map(([node]) => node);

    return mappedHours.length;
  };

  return dijkstra(graph, "1");
}