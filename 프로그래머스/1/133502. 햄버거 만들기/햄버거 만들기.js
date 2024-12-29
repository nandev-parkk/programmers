function solution(ingredient) {
     let temp = [];
  let count = 0;

  for (let i = 0; i < ingredient.length; i++) {
    temp.push(ingredient[i]);

    if (temp.length < 4) continue;

    if (temp.slice(-4).join("") === "1231") {
      temp.splice(-4, 4);
      count++;
    }
  }

  return count;
}