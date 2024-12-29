function solution(myString, pat) {
    const convertedMyString = Array.from(myString)
    .map((char) => (char === "A" ? "B" : "A"))
    .join("");

  return +convertedMyString.includes(pat);
}