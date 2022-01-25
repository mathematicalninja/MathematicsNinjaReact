/*
 * returns (A XOR B)
 */
export function xor(A: Boolean, B: Boolean): Boolean {
  return A ? !B : B;
  // if A is true, B needs to be false, otherwise B needs to be true.
}
