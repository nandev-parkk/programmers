function solution(x, y, n) {
  const queue = [[y, 0]];

  while (queue.length) {
    const [num, i] = queue.shift();

    if (num === x) return i;


    if (num % 2 === 0 && num / 2 >= x) queue.push([num / 2, i + 1]);

    if (num % 3 === 0 && num / 3 >= x) queue.push([num / 3, i + 1]);
      
      if (num - n >= x) queue.push([num - n, i + 1]);
  }

  return -1;
}