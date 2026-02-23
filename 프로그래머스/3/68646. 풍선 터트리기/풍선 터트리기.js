function solution(a) {
  let answer = 1;
  let [leftIdx, rightIdx] = [0, a.length - 1];
  let [min1, min2] = [a[leftIdx], a[rightIdx]];

  while (leftIdx < rightIdx) {
    if (min1 > min2 && min1 > a[++leftIdx]) {
      answer++;
      min1 = a[leftIdx];
    }

    if (min2 > min1 && min2 > a[--rightIdx]) {
      answer++;
      min2 = a[rightIdx];
    }
  }

  return answer;
}