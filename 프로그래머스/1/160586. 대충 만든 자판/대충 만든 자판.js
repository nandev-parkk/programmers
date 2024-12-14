function solution(keymap, targets) {
const answer = targets.map((target) => {
    const countArr = [];
    const splitTarget = target.split(""); // [A, B, C, D]

    for (const str of splitTarget) {
      let finalIndex = NaN;

      for (const key of keymap) {
        const currentIndex = key.indexOf(str);

        if (isNaN(finalIndex)) {
          finalIndex = currentIndex === -1 ? currentIndex : currentIndex + 1;
        } else {
          if (finalIndex === -1) {
            finalIndex = currentIndex === -1 ? currentIndex : currentIndex + 1;
          } else {
            finalIndex =
              currentIndex === -1
                ? finalIndex
                : Math.min(finalIndex, currentIndex + 1);
          }
        }
      }

      countArr.push(finalIndex);
    }

    const sum = countArr.reduce((acc, cv) => acc + cv, 0);

    return countArr.includes(-1) ? -1 : sum;
  });

  return answer;
}