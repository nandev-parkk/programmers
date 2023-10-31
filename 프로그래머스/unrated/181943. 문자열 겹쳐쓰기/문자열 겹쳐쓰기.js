function solution(my_string, overwrite_string, s) {
    let answer = [...my_string];
    let count = s;
    
    for(let i = 0; i < overwrite_string.length; i++) {
        answer[count] = overwrite_string[i];
        count++;
    }

    return answer.join('');
}