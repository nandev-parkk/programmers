function solution(numbers) {
    const numArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].filter(item => !numbers.includes(item)).reduce((sum, item) => sum + item, 0)
    
    return numArr;
}