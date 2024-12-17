const alphabet = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode(97 + i),
);

function solution(s, skip, index) {
    const answer = s.split("").map((char) => {
    let count = 0;
    let scount = alphabet.indexOf(char);
    let nextChar;

    console.log(`---${char}---`);

    while (count < index) {
      // 투 트랙으로 count를 올리는 코드와 alphabet을 순회하는 코드가 있어야한다.

      scount++;

      if (scount > 25) {
        scount = 0;
      }

      // console.log(scount);

      nextChar = alphabet[scount];

      // console.log(nextChar, "nextChar");

      // 포함되어 있지 않는 경우에만 count++
      if (!skip.includes(nextChar)) {
        count++;
      }
    }

    return nextChar;
  });

  return answer.join("");
}