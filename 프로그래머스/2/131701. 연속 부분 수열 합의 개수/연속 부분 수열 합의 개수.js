function solution(elements) {
  // 길이가 1인 연속 부분 수열의 합으로 시작
  let answer = 0;
  const sumNums = new Set();

  // 연속 부분 수열의 길이, 2부터 시작
  let sequenceLength = 1;

  while (sequenceLength <= elements.length) {
    let end = sequenceLength;

    let firstSum = 0;
    let tempSum = 0;

    for (let i = 0; i < sequenceLength; i++) {
      firstSum += elements[i];
    }

    sumNums.add(firstSum);

    tempSum = firstSum;

    for (let i = 0; i < elements.length - 1; i++) {
      end = end >= elements.length ? end - elements.length : end;

      tempSum = tempSum - elements[i] + elements[end];

      sumNums.add(tempSum);

      end++;
    }

    sequenceLength++;
  }

  answer += sumNums.size;

  return answer;
}