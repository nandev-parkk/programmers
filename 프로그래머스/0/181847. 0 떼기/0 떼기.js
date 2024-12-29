function solution(n_str) {
  const answer = Array.from(n_str);

  for (let i = 0; i < n_str.length; i++) {
    if (n_str[i] !== "0") break;

    n_str[i] === "0" && answer.shift();
  }

  return answer.join("");
}