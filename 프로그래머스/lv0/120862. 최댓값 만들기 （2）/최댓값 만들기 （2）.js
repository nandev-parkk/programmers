function solution(numbers) {
    const arr = [];
    
    for(let i = 0; i < numbers.length; i++) {
        for(let j = 0; j < numbers.length; j++) {
            if(i === j) continue;
            arr.push(numbers[i] * numbers[j])
        }
    }
    
    return Math.max(...arr)
}