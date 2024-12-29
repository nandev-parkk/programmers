function solution(arr) {
    return arr.flatMap((num) => Array.from({length: num}, (_, i) => num))
}