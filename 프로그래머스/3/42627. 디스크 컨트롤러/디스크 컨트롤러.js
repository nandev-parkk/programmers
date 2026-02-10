class MinHeap {
  constructor() {
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
    let parIdx = (curIdx / 2) >> 0;

    while (curIdx > 1 && this.heap[parIdx][1] > this.heap[curIdx][1]) {
      this.swap(parIdx, curIdx);
      curIdx = parIdx;
      parIdx = (curIdx / 2) >> 0;
    }
  }

  pop() {
    const min = this.heap[1];

    if (this.heap.length <= 2) this.heap = [null];
    else this.heap[1] = this.heap.pop();

    let curIdx = 1;
    let leftIdx = curIdx * 2;
    let rightIdx = curIdx * 2 + 1;

    if (!this.heap[leftIdx]) return min;
    if (!this.heap[rightIdx]) {
      if (this.heap[leftIdx][1] < this.heap[curIdx][1]) {
        this.swap(leftIdx, curIdx);
      }
      return min;
    }

    while (
      this.heap[leftIdx][1] < this.heap[curIdx][1] ||
      this.heap[rightIdx][1] < this.heap[curIdx][1]
    ) {
      const minIdx =
        this.heap[leftIdx][1] > this.heap[rightIdx][1] ? rightIdx : leftIdx;
      this.swap(minIdx, curIdx);
      curIdx = minIdx;
      leftIdx = curIdx * 2;
      rightIdx = curIdx * 2 + 1;

      if (leftIdx >= this.size()) break;
    }

    return min;
  }
}

function solution(jobs) {
  // 요청되는 시점 오름차순 정렬
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
    // minHeap에서
    if (minHeap.size() && time >= complete) {
      const job = minHeap.pop();

      complete = job[1] + time;
      total += complete - job[0];
    }

    time++;
  }

  return Math.floor(total / count);
}