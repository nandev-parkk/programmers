function solution(bridge_length, weight, truck_weights) {
  const bridge = Array(bridge_length).fill(0);
  let totalWeight = 0;
  let time = 0;

  while (true) {
    time++;
    totalWeight -= bridge.shift();

    const currentTruck = truck_weights[0];

    if (totalWeight + currentTruck <= weight) {
      bridge.push(currentTruck);
      totalWeight += currentTruck;
      truck_weights.shift();
    } else {
      bridge.push(0);
    }

    if (bridge.every((v) => v === 0)) break;
  }

  return time;
}