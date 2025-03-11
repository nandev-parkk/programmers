function solution(order) {
  const auxConveyor = [];

  let idx = 1;
  let count = 0;

  while (idx <= order.length) {
    auxConveyor.push(idx);

    while (auxConveyor.length && auxConveyor.at(-1) === order[count]) {
      auxConveyor.pop();
      count++;
    }

    idx++;
  }

  return count;
}