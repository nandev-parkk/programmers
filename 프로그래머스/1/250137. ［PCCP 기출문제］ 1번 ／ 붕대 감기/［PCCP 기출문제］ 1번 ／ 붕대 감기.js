function solution(bandage, health, attacks) {
  const [successSkillTime, recoveryPerSecond, additionalRecovery] = bandage;
  let tempHealth = health;

  // attacks의 0번 인덱스의 공격 시간을 시작시간, 마지막 인덱스의 공격 시간을 종료 시간으로 지정
  const [startTime] = attacks[0];
  const [endTime] = attacks[attacks.length - 1];

  let successRecovery = 0;

  for (let i = startTime; i <= endTime; i++) {
    if (tempHealth <= 0) return -1;

    const currentAttack = attacks.find(([attackTime]) => attackTime === i);

    if (currentAttack) {
      const [, damage] = currentAttack;

      tempHealth -= damage;
      successRecovery = 0;

      continue;
    }

    // 1초당 회복량 만큼 회복
    tempHealth = tempHealth >= health ? health : tempHealth + recoveryPerSecond;

    // 연속 성공 여부 판별을 위해 1씩 플러스
    successRecovery++;

    if (successRecovery === successSkillTime) {
      tempHealth =
        tempHealth >= health ? health : tempHealth + additionalRecovery;
      successRecovery = 0;
    }
  }

  return tempHealth <= 0 ? -1 : tempHealth;
}