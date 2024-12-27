function solution(num_list) {
     const lastNum = num_list[num_list.length - 1];
  const lastPrevNum = num_list[num_list.length - 2];

  if (lastNum > lastPrevNum) {
    num_list.push(lastNum - lastPrevNum);
  } else {
    num_list.push(lastNum * 2);
  }

  return num_list;
}