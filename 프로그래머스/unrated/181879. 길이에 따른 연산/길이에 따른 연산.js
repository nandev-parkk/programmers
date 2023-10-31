function solution(num_list) {
    const answer = num_list.reduce((acc, value) => {
        return num_list.length >= 11 ? acc + value : acc * value
    })
    
    return answer;
}