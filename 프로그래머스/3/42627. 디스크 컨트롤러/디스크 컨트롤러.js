class MinHeap {
  constructor() {
    // 편의상 인데스 0은 사용하지 않기 위해 null을 채워 시작
    this.heap = [null];
  }

  size() {
    return this.heap.length - 1;
  }

  swap(idx1, idx2) {
    [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
  }

  push(value) {
    this.heap.push(value);

    let curIdx = this.heap.length - 1;

    // 부모 인덱스는 항상 자식 인덱스 / 2
    // 예를 들어 자식 인덱스가 5인 경우 5 / 2는 2.5 >> 0을 하면 2가 되므로 부모 인덱스는 2이다.
    // 왼쪽 자식 인덱스는 부모 인덱스 * 2
    // 오른쪽 자식 인덱스는 부모 인덱스 * 2 + 1
    let parIdx = (curIdx / 2) >> 0;

    // 부모의 실행 시간이 더 크면 계속해서 부모와 자식의 위치를 변경
    while (curIdx > 1 && this.heap[parIdx][1] > this.heap[curIdx][1]) {
      this.swap(parIdx, curIdx);
      curIdx = parIdx;
      parIdx = (curIdx / 2) >> 0;
    }
  }

  // 마지막 노드를 루트로 올린 뒤 실행 시간이 더 짧은 자식과 계속 교환하면서 최소 힙 구조를 복구한다
  pop() {
    /** 1. 루트 제거 및 마지막 노드 올리기 */
    // 0은 없음
    const min = this.heap[1];

    // 노드가 하나면 힙을 비우고 2개 이상이면 마지막 노드를 꺼내서 제일 위로 올림
    if (this.heap.length <= 2) this.heap = [null];
    else this.heap[1] = this.heap.pop();

    let curIdx = 1;
    let leftIdx = curIdx * 2;
    let rightIdx = curIdx * 2 + 1;

    // 왼쪽 자식 노드가 없으면 바로 min 리턴 후 종료
    if (!this.heap[leftIdx]) return min;

    // 왼쪽 자식 노드만 있고 오른쪽 자식 노드가 없는 경우
    if (!this.heap[rightIdx]) {
      // 왼쪽 자식 노드가 부모 노드보다 더 작으면 부모 노드와 swap 및 min 리턴 후 종료
      if (this.heap[leftIdx][1] < this.heap[curIdx][1]) {
        this.swap(leftIdx, curIdx);
      }

      return min;
    }

    /** 2. 힙 구조 복구 */
    // 왼쪽 자식 노드나 오른쪽 자식 노드의 실행 시간이 부모 노드의 실행 시간보다 작으면 while문 실행
    while (
      this.heap[leftIdx][1] < this.heap[curIdx][1] ||
      this.heap[rightIdx][1] < this.heap[curIdx][1]
    ) {
      // 왼쪽 자식 노드와 오른쪽 자식 노드 중 더 작은 노드의 idx 할당
      const minIdx =
        this.heap[leftIdx][1] > this.heap[rightIdx][1] ? rightIdx : leftIdx;

      // 부모 노드와 swap
      this.swap(minIdx, curIdx);
      curIdx = minIdx;
      leftIdx = curIdx * 2;
      rightIdx = curIdx * 2 + 1;

      // heap의 size보다 leftIdx가 크거나 같으면 범위를 벗어나 내려갈 수 없으므로 while문 종료
      if (leftIdx >= this.size()) break;
    }

    return min;
  }
}

function solution(jobs) {
  // 요청되는 시점으로 오름차순 정렬
  jobs.sort((a, b) => a[0] - b[0]);
  const count = jobs.length;
  const minHeap = new MinHeap();

  let time = 0;
  let complete = 0;
  let total = 0;

  // jobs나 minHeap에 job이 있으면 while문 실행
  while (jobs.length || minHeap.size()) {
    // jobs에 job이 있으면 jobs의 첫번째 요소의 실행 시점과 time이 같으면 빼서 minHeap에 push
    // 같지 않으면 while문 종료
    while (jobs.length) {
      if (jobs[0][0] === time) {
        minHeap.push(jobs.shift());
      } else break;
    }

    // minHeap에 job이 있고 완료시간보다 time이 크거나 같으면 아래 로직 수행
    if (minHeap.size() && time >= complete) {
      const job = minHeap.pop();

      complete = job[1] + time; // 현재 잡의 실행 시간과 현재 시간을 더한 값
      total += complete - job[0];
    }

    time++;
  }

  return (total / count) >> 0;
}