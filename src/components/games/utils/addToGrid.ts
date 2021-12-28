import { bannerEnd } from "../../../utils/devTools/bannerEnd";
import { bannerStart } from "../../../utils/devTools/bannerStart";
import { logGridValues } from "../../../utils/devTools/logGridValues";
import { arrayStatePush } from "../../../utils/react/arrayStatePush";
import { BoardState, gridLayout, tileCoords } from "../interfaces/squareGame";
import { getTile, getTileNew } from "./getSquareValue";

/**
 * a way to add a tile to the grid in case it's interface changes
 */

export function addTileToGrid(
  player: number,
  currentBoard: gridLayout,
  tile: tileCoords,
): gridLayout {
  //
  bannerStart("addTileToGrid");
  logGridValues(currentBoard);

  // const v = currentBoard[tile.x][tile.y];
  const v = getTileNew({ grid: currentBoard, tile: tile });
  // const v =getTile({x:tile.x,y:tile.y})
  let G = currentBoard;
  let F: gridLayout = [];
  if (v === null) {
    F = changeValue({
      boardValues: currentBoard,
      newValue: player,
      tile: tile,
    });
    // G[tile.x][tile.y] = player;
    // TODO: FIX THIS ERROR
  } else {
    // still need an escape clause for if this hits an error
  }
  bannerEnd("addTileToGrid");
  logGridValues(F);
  bannerEnd("addTileToGrid");
  return F;
}

function changeValue({
  boardValues,
  newValue,
  tile,
}: {
  boardValues: gridLayout;
  newValue: number;
  tile: tileCoords;
}): gridLayout {
  bannerStart("changeValue");
  const T: gridLayout = [
    [null, null, 1, null],
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
  ];
  // return T;
  let R: gridLayout = [];
  const xMax = boardValues.length;
  const yMax = boardValues[0].length;
  for (let x = 0; x < boardValues.length; x++) {
    const xArray = boardValues[x];
    if (x == tile.x) {
      R[x] = mutateYArray(xArray, tile, newValue);
    } else {
      R[x] = retainYArray(xArray);
    }
    //
    //
    //
    //
    //
    //
    // for (let y = 0; y < xArray.length; y++) {
    //   const element = xArray[y];

    //   if (x == tile.x && y == tile.y) {
    //     R[x][y] = newValue;
    //   } else {
    //     R[x][y] = element;
    //   }
    // }
  }

  bannerEnd("changeValue");
  logGridValues(R);
  bannerEnd("changeValue");
  return R;
}

function retainYArray(xArray: (number | null)[]): (number | null)[] {
  return xArray;
}

function mutateYArray(
  xArray: (number | null)[],
  tile: tileCoords,
  value: number,
): (number | null)[] {
  bannerStart("mutatYArray");
  let R: (number | null)[] = [];

  for (let y = 0; y < xArray.length; y++) {
    const oldVal = xArray[y];
    if (y == tile.y) {
      R[y] = value;
    } else {
      R[y] = oldVal;
    }
  }
  bannerEnd("mutatYArray");
  return R;
}
