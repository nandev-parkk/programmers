function solution(genres, plays) {
  // map 데이터 구조: [genres]: [ [total], [ [id], [count], [id], [count] ] ]
  const map = new Map();

  for (let i = 0; i < genres.length; i++) {
    const genre = genres[i];
    const count = plays[i];

    if (!map.has(genre)) map.set(genre, [0, []]);

    const [total, data] = map.get(genre);

    data.push([i, count]);
    map.set(genre, [total + count, data]);
  }

  // 장르별 속한 노래들의 전체 재생수 내림차순
  const sortedByTotalCount = [...map.entries()].sort(
    (a, b) => b[1][0] - a[1][0],
  );

  const answer = [];

  // 장르별 속한 노래들의 각 재생수 내림차순, 재생수가 같은 경우 인덱스 오름차순 후 앞 2개만 자름
  sortedByTotalCount.forEach(([_, data]) => {
    const sortedBySongCount = data[1]
      .sort((a, b) => b[1] - a[1] || a[0] - b[0])
      .slice(0, 2);

    sortedBySongCount.forEach(([idx]) => answer.push(idx));
  });

  return answer;
}