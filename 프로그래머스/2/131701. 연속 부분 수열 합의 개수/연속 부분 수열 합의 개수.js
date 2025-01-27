function solution(elements) {
  const answer = new Set();

  // 연속 부분 수열의 길이, 1부터 시작
  let sequenceLength = 1;

  while (sequenceLength <= elements.length) {
    let firstSum = 0;
    let tempSum = 0;
    let next = sequenceLength;

    for (let i = 0; i < sequenceLength; i++) {
      firstSum += elements[i];
    }

    answer.add(firstSum);

    tempSum = firstSum;

    for (let i = 0; i < elements.length - 1; i++) {
      next = next >= elements.length ? next - elements.length : next;

      tempSum = tempSum - elements[i] + elements[next];

      answer.add(tempSum);

      if (sequenceLength === elements.length) break;

      next++;
    }

    sequenceLength++;
  }

  return answer.size;
}