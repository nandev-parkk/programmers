function solution(today, terms, privacies) {
  const answer = privacies
    .map((privacy, i) => {
      const [collectionDate, term] = privacy.split(" ");

      const validity = terms.find((a) => a.includes(term)).split(" ")[1];

      let [year, month, day] = collectionDate.split(".").map((date) => +date);

      for (let i = 0; i < validity; i++) {
        if (month === 12) {
          month = 0;
          year++;
        }

        month += 1;
      }

      if (day - 1 === 0) {
        month--;
      }

      if (!month) {
        month++;
      }

      day = day - 1 === 0 ? 28 : day - 1;

      const paddedMonth = month < 10 ? `0${month}` : month;
      const paddedDay = day < 10 ? `0${day}` : day;

      const todayTime = new Date(today.replaceAll(".", "-"));
      const availableDateTime = new Date(`${year}-${paddedMonth}-${paddedDay}`);

      return todayTime <= availableDateTime ? "" : i + 1;
    })
    .filter((i) => i);

  return answer;
}