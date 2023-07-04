function solution(num_list) {
    const answer = num_list.findIndex((num) => num < 0);
    
    return answer;
}