function solution(diffs, times, limit) {
  let [min, max] = [1, diffs.reduce((acc, cv) => acc + cv, 0)];
  let mid = Math.floor((min + max) / 2);
  let answer = mid;

  while (min <= max) {
    mid = Math.floor((min + max) / 2);

    let sum = 0;

    diffs.forEach((diff, i) => {
      const currentTime = times[i];

      if (diff <= mid) sum += currentTime;
      else {
        const wrong = diff - mid;
        const prevTime = times[i - 1];

        sum += (currentTime + prevTime) * wrong + currentTime;
      }
    });

    if (sum > limit) min = mid + 1;
    else {
      answer = mid;
      max = mid - 1;
    }
  }

  return answer;
}