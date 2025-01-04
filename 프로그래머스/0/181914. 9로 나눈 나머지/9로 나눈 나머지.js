function solution(number) {
    return [...number].reduce((acc, cv) => acc + Number(cv), 0) % 9
}