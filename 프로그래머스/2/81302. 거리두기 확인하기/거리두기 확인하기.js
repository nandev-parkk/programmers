function solution(places) {
  const straightDirections = [
    [-1, 0], // 상
    [1, 0], // 하
    [0, -1], // 좌
    [0, 1], // 우
  ];

  const diagonalDirections = {
    lt: [-1, -1], // 왼쪽 위 대각선
    rt: [-1, 1], // 오른쪽 위 대각선
    lb: [1, -1], // 왼쪽 아래 대각선
    rb: [1, 1], // 오른쪽 아래 대각선
  };

  const mappedPlaces = places.map((place) =>
    place.map((room) => room.split("")),
  );

  const answer = mappedPlaces.map((place) => {
    for (let i = 0; i < place.length; i++) {
      const currentRoom = place[i];
      const roomLength = currentRoom.length;

      for (let j = 0; j < currentRoom.length; j++) {
        const currentSeat = currentRoom[j];

        if (currentSeat === "P") {
          let x = i;
          let y = j;

          for (const [dx, dy] of straightDirections) {
            let nx = x + dx;
            let ny = y + dy;

            if (nx >= 0 && nx < roomLength && ny >= 0 && ny < roomLength) {
              // 상 하 좌 우가 P면 0 리턴
              if (place[nx][ny] === "P") return 0;

              // 상 하 좌 우가 O면 +1 자리가 P인지 확인
              if (place[nx][ny] === "O") {
                nx += dx;
                ny += dy;

                if (nx >= 0 && nx < roomLength && ny >= 0 && ny < roomLength) {
                  if (place[nx][ny] === "P") return 0;
                }
              }
            }
          }

          for (const direction in diagonalDirections) {
            const [dx, dy] = diagonalDirections[direction];

            let nx = x + dx;
            let ny = y + dy;

            if (nx >= 0 && nx < roomLength && ny >= 0 && ny < roomLength) {
              if (place[nx][ny] === "P") {
                if (direction === "lt") {
                  if (place[nx + 1][ny] !== "X" || place[nx][ny + 1] !== "X")
                    return 0;
                } else if (direction === "rt") {
                  if (place[nx + 1][ny] !== "X" || place[nx][ny - 1] !== "X")
                    return 0;
                } else if (direction === "lb") {
                  if (place[nx - 1][ny] !== "X" || place[nx][ny + 1] !== "X")
                    return 0;
                } else if (direction === "rb") {
                  if (place[nx - 1][ny] !== "X" || place[nx][ny - 1] !== "X")
                    return 0;
                }
              }
            }
          }
        }
      }
    }

    return 1;
  });

  return answer;
}