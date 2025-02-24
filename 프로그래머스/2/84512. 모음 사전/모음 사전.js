function solution(word) {
  const vowels = ["A", "E", "I", "O", "U"];
  const dictionary = [];

  function dfs(cv, limit) {
    if (limit > vowels.length) return;

    dictionary.push(cv);

    for (let i = 0; i < vowels.length; i++) {
      dfs(cv + vowels[i], limit + 1);
    }
  }

  dfs("", 0);

  return dictionary.indexOf(word);
}