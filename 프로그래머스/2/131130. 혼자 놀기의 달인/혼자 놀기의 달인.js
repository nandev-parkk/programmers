function solution(cards) {
  let idx = 0;
  let order = 1;
  let cardsLength = cards.length;
  let temp = [];
  const answer = {};

  while (cardsLength > -1) {
    const currentCard = cards[idx];

    if (currentCard === "visited") {
      answer[order] = temp;
      order++;

      const availableIdx = cards.findIndex((card) => card !== "visited");

      idx = availableIdx;
      temp = [];
      continue;
    }

    cards[idx] = "visited";
    idx = currentCard - 1;
    cardsLength--;
    temp.push(currentCard);
  }

  const values = Object.values(answer);

  if (values.length === 1) return 0;

  const [first, second] = values.sort((a, b) => b.length - a.length);

  return first.length * second.length;
}