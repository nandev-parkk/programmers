function solution(citations) {
  const answer = {};

  for (const citation of citations) {
    if (!citation) continue;

    const moreCitations = citations.filter((cv) => cv >= citation);

    answer[citation] = Math.min(moreCitations.length, citation);
  }

  const values = Object.values(answer);

  if (!values.length) return 0;

  return Math.max(...values);
}