function solution(name, yearning, photo) {
  const obj = {};

  for (let i = 0; i < name.length; i++) {
    obj[name[i]] = yearning[i];
  }

  const answer = photo.map((photoItem) => {
    return photoItem
      .map((photoItemName) => {
        return obj[photoItemName];
      })
      .filter((number) => number)
      .reduce((acc, currentValue) => acc + currentValue, 0);
  });

  return answer;
}