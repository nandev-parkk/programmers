function solution(s, skip, index) {
    const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  // alphabet 배열에서 s의 index를 구한다.
  const convertedStr = s.split("").map((str) => alphabet.indexOf(str));

  const s2 = convertedStr.map((num) => {
    let count = index;

    for (let i = 1; i <= index; i++) {
      const include =
        num + i >= alphabet.length
          ? alphabet[num + i - alphabet.length]
          : alphabet[num + i];

      if (skip.includes(include)) count++;
    }

    return alphabet.length - 1 < num + count
      ? alphabet[num + count - alphabet.length]
      : alphabet[num + count];
  });

  return s2.join("");
}