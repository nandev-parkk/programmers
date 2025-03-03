function solution(prices) {
    const answer = prices.map((_, i) => {
    let count = 0;

    for (let j = i + 1; j < prices.length; j++) {
      count++;

      if (prices[i] > prices[j]) break;
    }

    return count;
  });

  return answer;
}