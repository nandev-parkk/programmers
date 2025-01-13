function solution(video_len, pos, op_start, op_end, commands) {
  const convertedVideoLength =
    Number(video_len.split(":")[0]) * 60 + Number(video_len.split(":")[1]);
  let convertedPos = Number(pos.split(":")[0]) * 60 + Number(pos.split(":")[1]);

  const convertedOpStart =
    Number(op_start.split(":")[0]) * 60 + Number(op_start.split(":")[1]);
  const convertedOpEnd =
    Number(op_end.split(":")[0]) * 60 + Number(op_end.split(":")[1]);

  for (const command of commands) {
    // 오프닝 건너뛰기
    // 오프닝은 무조건 범위 안에 들어오면 이동한다.
    // 이동한 시간이 오프닝 범위 안이면 오프닝 엔드로
    // 현재 시간이 오프닝 범위 안이면 이동을 먼저하고 시간 이동
    // prev든 next든 현재 pos가 오프닝 범위 안이거나 이동한 시간이 오프닝 범위 안이면 무조건 처리
    if (convertedOpStart <= convertedPos && convertedPos <= convertedOpEnd) {
      convertedPos = convertedOpEnd;
    }

    if (command === "prev") {
      convertedPos -= 10;

      if (convertedPos < 10) {
        convertedPos = 0;
      }

      if (convertedOpStart <= convertedPos && convertedPos <= convertedOpEnd) {
        convertedPos = convertedOpEnd;
      }
    } else {
      convertedPos += 10;

      if (convertedVideoLength - convertedPos < 10) {
        convertedPos = convertedVideoLength;
      }

      if (convertedOpStart <= convertedPos && convertedPos <= convertedOpEnd) {
        convertedPos = convertedOpEnd;
      }
    }
  }

  const minute =
    Math.floor(convertedPos / 60) < 10
      ? `0${Math.floor(convertedPos / 60)}`
      : Math.floor(convertedPos / 60);
  const second =
    convertedPos % 60 < 10 ? `0${convertedPos % 60}` : convertedPos % 60;

  return `${minute}:${second}`;
}