import { max } from "../../../utils/maths/max";
import { min } from "../../../utils/maths/min";

/**
 Checks if the max diagonal is undefined.
 If so: returns longest side length.
 */
export function checkMaxLength(props: {
  length?: number;
  maxBound: number;
}): number {
  let R = 0;
  if (typeof props.length === "undefined") {
    R = props.maxBound;
  } else {
    R = props.length;
  }
  return R;
}
/**
 Checks if the min diagonal is undefined.
 If so: returns shortest side length or 3, whichever is smaller.
 */
export function checkMinLength(props: {
  length?: number;
  minBound: number;

  assumedValue?: number;
}): number {
  let R = 0;
  const Default = props.assumedValue ? props.assumedValue : 3;
  if (typeof props.length === "undefined") {
    R = min(props.minBound, Default);
  } else {
    R = props.length;
  }
  return R;
}
