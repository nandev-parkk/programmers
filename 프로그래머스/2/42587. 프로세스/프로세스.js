function solution(priorities, location) {
  const TARGET_PRIORITY = priorities[location];

  priorities[location] = "target";

  let answer = 0;

  while (priorities.includes("target")) {
    const currentPriority =
      priorities[0] === "target" ? TARGET_PRIORITY : priorities[0];

    const copiedPriorities = [...priorities];
    copiedPriorities[copiedPriorities.indexOf("target")] = TARGET_PRIORITY;

    if (Math.max(...copiedPriorities.slice(1)) > currentPriority)
      priorities.push(priorities.shift());
    else {
      priorities.splice(0, 1);
      answer++;
    }
  }

  return answer;
}