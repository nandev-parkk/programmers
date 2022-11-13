function solution(arr) {
    
    if(arr.length === 1) {
        return [-1];
    } else {
        const min = Math.min(...arr);
        
        const result = arr.filter(item => item !== min);
        return result;
    }
}