function solution(files) {
  // split한 다음 toUpperCase로 변경 후 HEAD 부분 비교
  // HEAD 부분이 같으면 NUMBER 부분을 Number로 변환 후 NUMBER 부분 비교

  const mappedFiles = files.map((file, i) => {
    const regex = new RegExp(/\d/);
    // search는 일치하는 첫번째 요소의 인덱스를 반하고 일치하는 요소가 없으면 -1을 반환
    const startNumberIdx = file.search(regex);

    const headPart = file.slice(0, startNumberIdx).toUpperCase();
    const numberPart = parseInt(file.match(/\d{1,5}/)[0]);

    return { i, headPart, numberPart };
  });

  mappedFiles.sort(
    (
      { headPart: headPartOfA, numberPart: numberPartOfA },
      { headPart: headPartOfB, numberPart: numberPartOfB },
    ) => {
      if (headPartOfA === headPartOfB) return numberPartOfA - numberPartOfB;

      return +(headPartOfA > headPartOfB) || -1;
    },
  );

  const answer = mappedFiles.map(({ i }) => files[i]);

  return answer;
}