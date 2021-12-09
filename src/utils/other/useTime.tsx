import { useEffect, useState } from "react";

/** React hook that returns the current time (updating it every interval seconds)*/

export function useTime(interval: number) {
  const I = interval ? interval : 1000;
  // makes clock state
  const [curTime, setTime] = useState(new Date());

  //   wrapper function to return void for setInterval
  function refreshTime() {
    setTime(new Date());
  }

  //   hook to create a interval updater, every I ms setInterval calls "refreshTime", which is what updates the time through setTime
  useEffect(() => {
    const timerID = setInterval(refreshTime, I);
    // cleanup return that stops this updating
    return function cleanup() {
      clearInterval(timerID);
    };
  }, []);

  return curTime;
}
