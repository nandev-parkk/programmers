function solution(numbers, direction) {
    if(direction === 'left') {
        const firstNum = numbers.shift();
        numbers.push(firstNum);
    } else {
        const lastNum = numbers.pop();    
        numbers.unshift(lastNum);
    }
    
    return numbers;
}