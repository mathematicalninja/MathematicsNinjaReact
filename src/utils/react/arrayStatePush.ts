// export function arrayStatePush<T>(
//   arraySetState: React.Dispatch<React.SetStateAction<T[]>>,
//   newElement: T,
// ) {
//   arraySetState((arr) => [...arr, newElement]);
// }

export function arrayStatePush<T>(
  arraySetState: React.Dispatch<React.SetStateAction<T[]>>,
) {
  function R(newElement) {
    return arraySetState((arr) => [...arr, newElement]);
  }

  return R;
}
