class UnionFind {
  constructor(n) {
    this.parent = Array.from({ length: n }, (_, i) => i);
    this.rank = Array(n).fill(0);
  }

  // 특정 노드의 부모를 찾는 함수
  find(i) {
    if (this.parent[i] === i) return i;

    this.parent[i] = this.find(this.parent[i]);
      
    return this.parent[i];
  }

  // 두 노드를 합치는 함수
  union(i, j) {
    const rootI = this.find(i);
    const rootJ = this.find(j);

    if (rootI !== rootJ) {
      if (this.rank[rootI] < this.rank[rootJ]) {
        this.parent[rootI] = rootJ;
      } else if (this.rank[rootI] > this.rank[rootJ]) {
        this.parent[rootJ] = rootI;
      } else {
        this.parent[rootJ] = rootI;
        this.rank[rootI]++;
      }

      return true;
    }

    return false;
  }
}

function solution(n, costs) {
  /**
   * 1. 가중치를 기준으로 간선을 오름차순 정렬한다.
   *  - 선택 과정에서 가중치가 최소인 간선을 추가하며 최소 신장 트리를 만들기 때문에 간선을 오름차순 정렬 해야한다.
   *  - 최소 신장 트리의 순환성을 확인하기 위해 부모 정점을 기록하며, 초기 부모 정점은 자기 자신이 된다.
   * 2. 순회하지 않은 간선 중 가중치가 가장 작은 간선을 선택한다.
   *  - 순회하지 않는다는 것은 이전 정점과 현재 정점의 부모 정점이 다르다는 것을 의미한다.
   *  - 현재 정점의 부모 정점은 이전 정점으로 갱신한다.
   * */

  // 가중치를 기준으로 오름차순 정렬
  const sortedCosts = costs.sort((a, b) => a[2] - b[2]);

  const uf = new UnionFind(n);

  let totalCost = 0;
  let edges = 0;

  for (const [vertex1, vertex2, cost] of sortedCosts) {
    if (uf.union(vertex1, vertex2)) {
      totalCost += cost;
      edges++;

      if (edges === n - 1) break;
    }
  }

  console.log(totalCost);

  return totalCost;
}