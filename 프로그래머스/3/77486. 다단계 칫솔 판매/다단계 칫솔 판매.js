function solution(enroll, referral, seller, amount) {
  /**
   * 1. enroll의 각 i마다 추천한 사람들을 입력하여 그래프 형태 데이터 생성
   * 2. seller를 for문을 돌면서 각 i의 최상위 노드까지 10%씩 주면서 가장 최상위에 갈 때까지 while문 반복
   * 3. enroll의 i에 맞게 currentAmount를 push한 후 리턴
   * */

  const graph = new Map();

  enroll.forEach((person, i) => {
    graph.set(person, [referral[i], 0]);
  });

  const setAmount = (person, amount) =>
    graph.set(person, [graph.get(person)[0], amount]);

  seller.forEach((person, i) => {
    let [topNode, currentPersonAmount] = graph.get(person);

    // 판매금액
    let currentAmount = amount[i] * 100;

    // 상납금
    let passAmount = Math.floor(currentAmount / 10);

    // 내 돈
    let keepAmount = currentAmount - passAmount;

    // 현재 사람의 amount 계산
    setAmount(person, currentPersonAmount + keepAmount);

    while (true) {
      // topNode이 '-'인 경우 / 10 한 금액을 더한 후 break;
      if (topNode === "-") break;

      currentAmount = passAmount;
      passAmount = Math.floor(passAmount / 10);

      keepAmount = currentAmount - passAmount;

      const topNodeCurrentAmount = graph.get(topNode)[1];
      setAmount(topNode, topNodeCurrentAmount + keepAmount);

      [topNode] = graph.get(topNode);
        
        if (passAmount < 1) break;
    }
  });

  const answer = [...graph.values()].map(([_, price]) => price);

  return answer;
}