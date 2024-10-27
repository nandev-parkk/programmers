function solution(name, yearning, photo) {
  const obj = {};

  for (let i = 0; i < name.length; i++) {
    obj[name[i]] = yearning[i];
  }

  const answer = photo.map((item) => {
    return item
      .map((value) => obj[value] || 0)
      .reduce((acc, cv) => acc + cv, 0);
  });

  return answer;
}