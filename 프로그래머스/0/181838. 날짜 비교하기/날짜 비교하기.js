function solution(date1, date2) {
  const convertedDate1 = new Date(date1.join("-"));
  const convertedDate2 = new Date(date2.join("-"));

  return convertedDate1 < convertedDate2 ? 1 : 0;
}