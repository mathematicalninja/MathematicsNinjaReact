function pause(time: number, callback?: () => void): void {
  setTimeout(() => {
    if (callback) {
      callback();
    }
  }, time);
  return;
}

function newPause(time: number, callback?: () => void): void {
  // const startTime = new Date().getTime();
  const goalTime = time + new Date().getTime();
  // const goalTime = startTime + time;

  while (true) {
    if (new Date().getTime() >= goalTime) {
      if (callback) {
        callback();
      }
      return;
    }
  }
}

export default newPause;
