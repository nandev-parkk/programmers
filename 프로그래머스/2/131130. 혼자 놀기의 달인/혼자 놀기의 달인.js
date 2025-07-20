function solution(cards) {
  let idx = 0;
  let cardsLength = cards.length;
  let temp = 0;
  const answer = [];

  while (cardsLength > -1) {
    const currentCard = cards[idx];

    if (currentCard === "visited") {
      answer.push(temp);
      temp = 0;

      idx = cards.findIndex((card) => card !== "visited");
      continue;
    }

    cards[idx] = "visited";
    idx = currentCard - 1;
    cardsLength--;
    temp++;
  }

  if (answer.length === 1) return 0;

  const [first, second] = answer.sort((a, b) => b - a);

  return first * second;
}