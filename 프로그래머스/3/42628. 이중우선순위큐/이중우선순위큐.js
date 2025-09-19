function solution(operations) {
  const queue = [];

  for (const operation of operations) {
    const [command, num] = operation.split(" ");

    if (command === "I") {
      queue.push(+num);
      queue.sort((a, b) => a - b);
    } else {
      if (!queue.length) continue;

      if (num.includes("-")) {
        queue.shift();
      } else {
        queue.pop();
      }
    }
  }

  return !queue.length ? [0, 0] : [queue[queue.length - 1], queue[0]];
}