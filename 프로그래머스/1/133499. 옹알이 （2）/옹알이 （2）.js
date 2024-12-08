function solution(babbling) {
  const words = ["aya", "ye", "woo", "ma"];
  let answer = 0;

  // 하나씩 가져와서 체크 후 말할 수 있는 단어이면 이전 값과 비교하여 같으면 패스
  babbling.forEach((bab) => {
    const spreadBab = [...bab];

    let validationBab = "";
    let prevIncludeBab = "";

    while (spreadBab.length) {
      // spreadBab.shift() 리턴 값은 첫번째 아이템
      validationBab += spreadBab.shift();

      const isIncludeBab = words.includes(validationBab);

      if (!isIncludeBab || (isIncludeBab && prevIncludeBab === validationBab))
        continue;

      prevIncludeBab = validationBab;
      validationBab = "";
    }

    if (!validationBab) answer++;
  });
    
    return answer;
}