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
    let parIdx = Math.floor((curIdx - 1) / 2);

    while (curIdx && this.heap[parIdx][1] > this.heap[curIdx][1]) {
      this.swap(parIdx, curIdx);

      curIdx = parIdx;
      parIdx = Math.floor((curIdx - 1) / 2);
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
  let answer = 0;

  // for문을 돌면서 time과 job[0]의 시점이 맞는 순간 queue에 push
  while (jobs.length || minHeap.size()) {
    while (jobs.length) {
      if (jobs[0][0] === time) {
        minHeap.push(jobs.shift());
      } else break;
    }

    if (minHeap.size() && time >= complete) {
      const task = minHeap.pop();
      complete = task[1] + time;
      answer += complete - task[0];
    }

    time++;
  }

  return Math.floor(total / count);
}