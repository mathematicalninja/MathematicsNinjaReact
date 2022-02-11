function pause(time: number, callback?: () => void): void {
  setTimeout(() => {
    if (callback) {
      callback();
    }
  }, time);
  return;
}

export default pause;
