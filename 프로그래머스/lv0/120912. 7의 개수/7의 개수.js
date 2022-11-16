function solution(array) {
    const result = array.join('').split('').filter(item => 7 === +item).length;
    return result;
}