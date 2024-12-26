function solution(num_list, n) {
    return num_list.map((num, i) => !(i % n) && num).filter((num) => num);
}