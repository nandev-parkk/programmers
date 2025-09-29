function solution(A, B) {
  // 가장 작은 원소로 처리
  let answer = 0;

  // 오름차순 정렬
  const sortedA = A.sort((a, b) => a - b);
  const sortedB = B.sort((a, b) => a - b);

  let [aPointer, bPointer] = [0, 0];

  while (aPointer < sortedA.length && bPointer < sortedB.length) {
    if (sortedA[aPointer] < sortedB[bPointer]) {
      answer++;
      aPointer++;
      bPointer++;
    } else {
      bPointer++;
    }
  }

  return answer;
}