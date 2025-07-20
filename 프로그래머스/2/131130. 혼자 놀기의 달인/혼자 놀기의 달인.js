function solution(cards) {
  let i = 0;
  let order = 1;
  let length = cards.length;
  const obj = {};
  let temp = [];

  while (length > -1) {
    const currentCard = cards[i];

    if (currentCard === "visited") {
      obj[order] = temp;
      order++;

      const nextCard = cards.findIndex((card) => card !== "visited");

      i = nextCard;
      temp = [];
      continue;
    }

    cards[i] = "visited";
    i = currentCard - 1;
    length--;
    temp.push(currentCard);
  }

  const values = Object.values(obj);

  if (values.length === 1) return 0;

  const [first, second] = values.sort((a, b) => b.length - a.length);

  return first.length * second.length;
}