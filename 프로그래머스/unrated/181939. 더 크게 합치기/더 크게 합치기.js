function solution(a, b) {
    const convertA = String(a);
    const convertB = String(b);
    
    const first = parseInt(convertA + convertB);
    const second = parseInt(convertB + convertA);
    
    if(first < second) {
        return second
    } else {
        return first
    }
}