function solution(fees, records) {
  const [defaultTime, defaultFee, unitTime, unitFee] = fees;

  const convertedRecords = Object.entries(
    records.reduce((acc, cv) => {
      const [time, carNumber] = cv.split(" ");

      const arr = acc[carNumber] || [];

      arr.push(time);

      return {
        ...acc,
        [carNumber]: arr,
      };
    }, {}),
  ).sort((a, b) => a[0] - b[0]);

  const answer = convertedRecords.map((record) => {
    const [, timeTable] = record;

    let total = 0;

    while (timeTable.length) {
      const [start, end] = timeTable.splice(0, 2);

      const convertedStart = start.split(":");
      const convertedEnd = end ? end.split(":") : ["23", "59"];

      const startHour =
        parseInt(convertedStart[0]) * 60 + parseInt(convertedStart[1]);

      const endHour =
        parseInt(convertedEnd[0]) * 60 + parseInt(convertedEnd[1]);

      total += endHour - startHour;
    }

    return total <= defaultTime
      ? defaultFee
      : defaultFee + Math.ceil((total - defaultTime) / unitTime) * unitFee;
  });

  return answer;
}