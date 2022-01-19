export default function sortDoubleArray<T>(
  arrayOfArray: Array<Array<T>>,
): Array<Array<T>> {
  // return arrayOfArray;

  let A = arrayOfArray;
  A.sort(arrayCompare);
  return A;
}

function arrayCompare(A: any[], B: any[]) {
  const a = A.length;
  const b = B.length;
  return b - a;
}
