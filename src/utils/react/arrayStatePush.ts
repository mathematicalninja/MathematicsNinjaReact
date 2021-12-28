// export function arrayStatePush<T>(
//   arraySetState: React.Dispatch<React.SetStateAction<T[]>>,
//   newElement: T,
// ) {
//   arraySetState((arr) => [...arr, newElement]);
// }

export function arrayStatePush<T>(
  arraySetState: React.Dispatch<React.SetStateAction<T[]>>,
) {
  function R(newElement: T) {
    return arraySetState((arr) => [...arr, newElement]);
  }

  return R;
}

export function historyArrayStatePush<T>({
  arraySetState,
  elementSetState,
}: {
  arraySetState: React.Dispatch<React.SetStateAction<T[]>>;
  elementSetState: React.Dispatch<React.SetStateAction<T>>;
}): (newElement: T) => void {
  function R(newElement: T) {
    arraySetState((arr) => [...arr, newElement]);
    elementSetState(newElement);
  }

  return R;
}
