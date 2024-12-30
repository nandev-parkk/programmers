function solution(new_id) {
// 1) 모든 대문자를 소문자로 치환
  new_id = new_id.toLowerCase();

  // 2) 알파벳 소문자, 빼기, 밑줄, 마침표를 제외한 모든 문자 제거
  new_id = new_id.replace(/[^a-z0-9._-]/g, "");

  // 3) 마침표가 2번 이상 연속된 부분을 하나의 마침표로 치환
  let temp = [];

  for (let i = 0; i < new_id.length; i++) {
    temp.push(new_id[i]);

    if (temp.length < 2) continue;

    if (temp.slice(-2).join("") === "..") {
      temp.splice(-1, 1);
    }
  }

  new_id = temp.join("");

  // 4) 처음과 끝의 마침표 삭제
  if (new_id.startsWith(".")) new_id = new_id.substring(1);

  if (new_id.endsWith(".")) new_id = new_id.substring(0, new_id.length - 1);

  // 5) 빈 문자열이면 a 대입
  if (!new_id) new_id = "a";

  // 6) 길이자 16자 이상이면 처음 15글자만 확보, 만약 제거 후 마침표가 끝에 위치하면 제거
  if (new_id.length > 15) new_id = new_id.substring(0, 15);

  // 6-1) 만약 제거 후 끝에 마침표가 위치하면 제거
  if (new_id.endsWith(".")) new_id = new_id.substring(0, new_id.length - 1);

  // 7) 길이가 2자 이하라면, 마지막 문자를 길이가 3이 될때까지 반복해서 붙임
  if (new_id.length <= 2) {
    const lastWord = new_id[new_id.length - 1];

    for (let i = 1; i <= 3; i++) {
      if (new_id.length > 2) break;

      new_id += lastWord;
    }
  }

  return new_id;
}