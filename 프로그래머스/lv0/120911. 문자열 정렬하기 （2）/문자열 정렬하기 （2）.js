function solution(my_string) {
    const str = my_string.toLowerCase();
    const result = [...str].sort().join('');
    
    return result;
}