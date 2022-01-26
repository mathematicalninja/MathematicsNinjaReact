/**
 * forces value between min and max
 *
 * if min>max returns null
 */
export function forceBounded(
  Min: number,
  Max: number,
  Value: number,
): number | null {
  if (Min > Max) {
    return null;
  }
  return CV(Min, Max, Value);
}
/**
 * if Value is between Min and Max, returns Value
 *
 * otherwise returns DefaultValue
 */
export function checkBoundedWithDefault(
  Min: number,
  Max: number,
  Value: number,
  DefaultValue: number,
): number {
  const I = forceBounded(Min, Max, Value);
  if (typeof I !== "number") {
    return DefaultValue;
  } else {
    return I;
  }
}
/**
 *returns min(max(Min, Value), Max);
 */
function CV(N: number, X: number, V: number) {
  return (N > V ? N : V) < X ? (N > V ? N : V) : X;
}

/*
 * checks if value is between min and max
 */
export function checkBounded(min: number, max: number, value: number) {
  return min <= value && value <= max;
}
