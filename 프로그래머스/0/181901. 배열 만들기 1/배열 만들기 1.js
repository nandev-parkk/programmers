function solution(n, k) {
    return Array.from({length: n}, (_, i) => i + 1).filter((num) => !(num % k))
}