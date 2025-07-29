function solution(cap, n, deliveries, pickups) {
  let answer = 0;

  // 가장 먼 곳에 배달해야하거나 수거해야할 택배가 없는 경우 제거
  while (deliveries[n - 1] === 0 && pickups[n - 1] === 0) {
    deliveries.pop();
    pickups.pop();
    n--;
  }

  let distance = n;

  let truck = 0;

  // 배달해야하거나 수거해야할 택배가 있는 경우
  while (deliveries.length || pickups.length) {
    // 배달해야할 택배가 있는 경우
    while (deliveries.length) {
      truck += deliveries.pop();

      if (truck > cap) {
        deliveries.push(truck - cap);

        break;
      }
    }
    truck = 0;

    // 수거해야할 택배가 있는 경우
    while (pickups.length) {
      truck += pickups.pop();

      if (truck > cap) {
        pickups.push(truck - cap);

        break;
      }
    }
    truck = 0;

    // answer에 distance를 더하고, distance를 배달 및 수거 후 가장 먼 곳으로 최신화
    answer += distance * 2;
    distance = Math.max(deliveries.length, pickups.length);
  }

  return answer;
}