function solution(my_string, indices) {
    const answer = Array.from(my_string)
    .filter((_, i) => !indices.includes(i))
    .join("");

  return answer;
}