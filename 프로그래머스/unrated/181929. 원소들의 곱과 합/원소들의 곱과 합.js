function solution(num_list) {
    const multiply = num_list.reduce((acc, current) => acc * current, 1);
    const add = num_list.reduce((acc, current) => acc + current, 0);
    const sum = add * add;
    
    return multiply > sum ? 0 : 1;
}