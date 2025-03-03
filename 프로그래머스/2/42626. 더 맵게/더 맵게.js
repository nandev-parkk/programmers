class MinHeap {
  constructor() {
    this.heap = [];
  }

  swap(idx1, idx2) {
    [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
  }

  push(num) {
    this.heap.push(num);

    let currentIdx = this.heap.length - 1;
    let parentIdx = Math.floor((currentIdx - 1) / 2);

    while (!!currentIdx && this.heap[parentIdx] > this.heap[currentIdx]) {
      this.swap(currentIdx, parentIdx);

      currentIdx = parentIdx;
      parentIdx = Math.floor((currentIdx - 1) / 2);
    }
  }

  pop() {
    if (!this.heap.length) return null;

    if (this.heap.length === 1) return this.heap.pop();

    const root = this.heap[0];
    this.heap[0] = this.heap.pop();

    let currentIdx = 0;
    let leftChildIdx = 2 * currentIdx + 1;
    let rightChildIdx = 2 * currentIdx + 2;

    while (
      this.heap[currentIdx] > this.heap[leftChildIdx] ||
      this.heap[currentIdx] > this.heap[rightChildIdx]
    ) {
      const leastChildIdx =
        this.heap[leftChildIdx] > this.heap[rightChildIdx]
          ? rightChildIdx
          : leftChildIdx;

      this.swap(currentIdx, leastChildIdx);
      currentIdx = leastChildIdx;
      leftChildIdx = 2 * currentIdx + 1;
      rightChildIdx = 2 * currentIdx + 2;
    }

    return root;
  }
}

function solution(scoville, K) {
  let answer = 0;
  const minHeap = new MinHeap();

  for (const s of scoville) {
    minHeap.push(s);
  }

  while (minHeap.heap[0] < K) {
    if (minHeap.heap.length === 1) return -1;

    const leastFood = minHeap.pop();
    const secondLeastFood = minHeap.pop();
    const mixedFood = leastFood + secondLeastFood * 2;

    minHeap.push(mixedFood);
    answer++;
  }

  return answer;
}