function solution(plans) {
  const getMinute = (time) => {
    const [hour, minute] = time.split(":").map(Number);

    return hour * 60 + minute;
  };

  const answer = [];
  const sortedPlans = plans
    .map(([name, start, playtime]) => [
      name,
      getMinute(start),
      Number(playtime),
    ])
    .sort((a, b) => a[1] - b[1]);
  const stack = [];

  for (let i = 0; i < sortedPlans.length; i++) {
    const [name, start, playtime] = sortedPlans[i];

    if (sortedPlans[i + 1]) {
      const nextStart = sortedPlans[i + 1][1];

      if (start + playtime <= nextStart) {
        answer.push(name);
        let availableTime = nextStart - (start + playtime);

        while (stack.length) {
          const [name, playtime] = stack.pop();

          if (playtime <= availableTime) {
            availableTime -= playtime;
            answer.push(name);
          } else {
            stack.push([name, playtime - availableTime]);
            break;
          }
        }
      } else {
        // ...stack에 현재 요소 넣기
        stack.push([name, playtime - (nextStart - start)]);
      }
    } else {
      answer.push(name);

      while (stack.length) {
        const [name] = stack.pop();

        answer.push(name);
      }
    }
  }

  return answer;
}