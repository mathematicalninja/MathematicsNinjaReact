/**
 * if Value is between Min and Max, returns Value
 *
 * otherwise returns null
 */
export function checkBounded(
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
  const I = checkBounded(Min, Max, Value);
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
