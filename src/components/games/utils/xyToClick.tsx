import { tileCoords } from "../interfaces/squareGame";

export function xyToClick({ clickCallback }: { clickCallback }) {
  return () => {
    ({ x, y }) => clickCallback({ x: x, y: y }); // migrate click to a prop
    // need to add to bard History etc.
  };
}

type T = (click) => ({ x, y }) => () => void;
type FT = ({ x, y }: tileCoords) => () => void;

type CT = ({ x, y }: tileCoords) => any;

/**
 *wrapper function that turns a click function into an xy function. Where the xy function can be turned into an onClick for any xy pair
 *
 * @example xyFunction(click)({x,y}) is a function ()=> void
 */
export function xyFunction(click: CT): FT {
  function F({ x, y }) {
    function G() {
      click({ x, y });
    }
    return G;
  }
  return F;
}
