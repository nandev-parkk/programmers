function solution(myString) {
    return [...myString].map((str) => (str < "l" ? "l" : str)).join("");
}