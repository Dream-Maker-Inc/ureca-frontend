import { useEffect } from "react";

export const useTimer = (
  time: number,
  setTime: (newTime: number) => void,
  pause: boolean
) => {
  useEffect(() => {
    const timeOver = time <= 0;

    const timerId = setInterval(() => {
      timeOver ? clearInterval(timerId) : setTime(time - 1);
    }, 1000);

    if (pause) clearInterval(timerId);

    return () => clearInterval(timerId);
  }, [time, setTime, pause]);
};
