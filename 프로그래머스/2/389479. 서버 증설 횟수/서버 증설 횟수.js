function solution(players, m, k) {
  let answer = 0;
  let scaleUpServerQuantity = 0;
  const serverScaleUpTimeline = [];

  players.forEach((player, time) => {
    // 서버를 몇개 증설해야 하는지 파악한 후 현재 증설된 서버의 수보다 큰 경우에만 로직 수행
    const needScaleUpServerQuantity = Math.floor(player / m);

    if (needScaleUpServerQuantity > scaleUpServerQuantity) {
      const finalScaleUpQuantity =
        needScaleUpServerQuantity - scaleUpServerQuantity;

      scaleUpServerQuantity += finalScaleUpQuantity;
      serverScaleUpTimeline.push([time, finalScaleUpQuantity]);
      answer += finalScaleUpQuantity;
    }

    // 운영 가능시간이 지났는지 체크하고 지난 서버는 제거하는 로직
    if (serverScaleUpTimeline.length) {
      const [scaleUpTime, scaleUpQuantity] = serverScaleUpTimeline[0];

      if (time + 1 - k === scaleUpTime) {
        scaleUpServerQuantity -= scaleUpQuantity;
        serverScaleUpTimeline.shift();
      }
    }
  });

  return answer;
}