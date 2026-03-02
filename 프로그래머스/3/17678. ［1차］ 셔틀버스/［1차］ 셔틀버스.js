function solution(n, t, m, timetable) {
  // timetable을 분 단위로 변환 및 오름차순 정렬
  const sortedTimetable = timetable
    .map((time) => {
      const [hour, minute] = time.split(":").map(Number);

      return hour * 60 + minute;
    })
    .sort((a, b) => a - b);

  let busTime = 9 * 60; // 첫 차 시간은 09:00
  let lastTime = 0;
  let crewIdx = 0;

  // 셔틀 버스 운행
  for (let i = 0; i < n; i++) {
    let max = m;

    // 첫 차인 경우
    // 정원이 다 안찼고 크루의 대기열 도착 시각이 첫 차 시간보다 작거나 같은 경우 탑승
    while (
      max > 0 &&
      crewIdx < sortedTimetable.length &&
      sortedTimetable[crewIdx] <= busTime
    ) {
      crewIdx++;
      max--;
    }

    // 막차인 경우
    if (i === n - 1) {
      if (max > 0)
        lastTime = busTime; // 자리가 남은 경우 버스 시간
      else lastTime = sortedTimetable[crewIdx - 1] - 1; // 자리가 꽉 찬 경우 마지막으로 탄 사람보다 1분 일찍
    }

    busTime += t; // 다음 버스 시간으로 최신화
  }

  const hour = Math.floor(lastTime / 60);
  const minute = lastTime % 60;

  return `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
}