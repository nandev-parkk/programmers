function solution(record) {
     const actions = {
    Enter: "님이 들어왔습니다.",
    Leave: "님이 나갔습니다.",
  };

  const nicknames = {};

  const answer = [];

  for (const v of record) {
    const [action, uid, nickname] = v.split(" ");

    if (action === "Enter" || action === "Change") {
      nicknames[uid] = nickname;
    }

    if (action === "Enter" || action === "Leave") {
      answer.push([action, uid]);
    }
  }

  return answer.map(([action, uid]) => `${nicknames[uid]}${actions[action]}`);
}