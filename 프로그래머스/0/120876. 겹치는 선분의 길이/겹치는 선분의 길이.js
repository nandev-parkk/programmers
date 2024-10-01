const points = [];
let result = 0;

const calculatePoints = (firstLine, secondLine) => {
  const startPoint = Math.max(firstLine[0], secondLine[0]);
  const endpoint = Math.min(firstLine[1], secondLine[1]);
  const length = Math.max(0, endpoint - startPoint);

  if (length <= 0) return;

  result += length;
  points.push(startPoint, endpoint);
};

function solution(lines) {
  calculatePoints(lines[0], lines[1]);
  calculatePoints(lines[0], lines[2]);
  calculatePoints(lines[1], lines[2]);

  const isDuplicate = new Set(points).size !== points.length;

  if (isDuplicate) {
    const minPoint = Math.min(...points);
    const maxPoint = Math.max(...points);

    return maxPoint - minPoint;
  } else {
    return result;
  }
}