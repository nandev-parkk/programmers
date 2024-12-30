function solution(wallpaper) {
const obj = {
    lux: NaN,
    luy: NaN,
    rdx: NaN,
    rdy: NaN,
  };

  for (let i = 0; i < wallpaper.length; i++) {
    const currentWallpaper = wallpaper[i];

    if (!currentWallpaper.includes("#")) continue;

    // lux
    if (isNaN(obj.lux)) obj.lux = i;

    // rdx
    if (isNaN(obj.rdx) || obj.rdx < i + 1) obj.rdx = i + 1;

    const paperArr = [...currentWallpaper];

    console.log(paperArr);

    for (let j = 0; j < paperArr.length; j++) {
      const currentGrid = paperArr[j];

      if (currentGrid !== "#") continue;

      // luy
      if (isNaN(obj.luy) || obj.luy > j) obj.luy = j;

      // rdy
      if (isNaN(obj.rdy) || obj.rdy < j + 1) obj.rdy = j + 1;
    }
  }

  return Object.values(obj);
}