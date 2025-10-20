function solution(genres, plays) {
  const map = new Map();

  // map 데이터 구조
  // [genres]: {
  //  total: [count],
  //  data: [
  //   [id], [count],
  //   [id], [count],
  //   ...
  //  ]
  // }
  for (let i = 0; i < genres.length; i++) {
    const genre = genres[i];
    const count = plays[i];

    // if (!map.has(genre)) map.set(genre, { total: 0, data: [] });
    if (!map.has(genre)) map.set(genre, [0, []]);

    const [total, data] = map.get(genre);

    data.push([i, count]);
    map.set(genre, [total + count, data]);
  }

  const sorted = [...map.entries()].sort((a, b) => b[1][0] - a[1][0]);

  const answer = [];
  sorted.forEach(([_, data]) => {
    const a = data[1].sort((a, b) => b[1] - a[1] || a[0] - b[0]).slice(0, 2);

    a.forEach(([idx]) => {
      answer.push(idx);
    });
  });

  return answer;
}