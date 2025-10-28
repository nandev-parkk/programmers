function solution(user_id, banned_id) {
  const getPermutation = (values, selectNum) => {
    const result = [];

    if (selectNum === 1) return values.map((value) => [value]);

    values.forEach((fixed, i, origin) => {
      const rest = [...origin.slice(0, i), ...origin.slice(i + 1)];
      const permutation = getPermutation(rest, selectNum - 1);
      const attached = permutation.map((value) => [fixed, ...value]);

      result.push(...attached);
    });

    return result;
  };

  // user_id로 banned_id 길이를 가진 순열을 만든다.
  const permutation = getPermutation(user_id, banned_id.length);

  // 만든 순열 중 banned_id에 매칭되는 순열만 남긴다

  const filtered = permutation.filter((value) => {
    for (let i = 0; i < value.length; i++) {
      const [currentUserId, currentBannedId] = [value[i], banned_id[i]];

      if (currentUserId.length !== currentBannedId.length) return false;

      for (let j = 0; j < currentUserId.length; j++) {
        if (currentBannedId[j] === "*") continue;

        if (
          currentUserId[j] !== currentBannedId[j]
        )
          return false;
      }
    }

    return true;
  });

  // 중복되는 값이 있을 수 있기 때문에 오름차순 정렬 후 키가 모두 같은 경우 제거한다.
  const answer = new Set(filtered.map((value) => value.sort().join(""))).size;

  // answer 리턴
  return answer;
}