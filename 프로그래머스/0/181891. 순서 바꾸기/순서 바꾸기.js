function solution(num_list, n) {
    const spliceNumList = num_list.splice(0, n);

  return [...num_list, ...spliceNumList];
}