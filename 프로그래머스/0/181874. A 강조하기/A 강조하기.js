function solution(myString) {
  return myString
    .split("")
    .map((char) => {
      if (char === " ") {
        return char;
      } else if (char === "a" || char === "A") {
        return char.toUpperCase();
      } else {
        return char.toLowerCase();
      }
    })
    .join("");
}