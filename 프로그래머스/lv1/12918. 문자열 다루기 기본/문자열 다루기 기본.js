function solution(s) {
    const isLength = s.length === 4 || s.length === 6;
    const isNum = s.split('').map(item => !isNaN(+item)).filter(item => item === true);
    
    return isLength && isNum.length === s.length ? true : false;
}