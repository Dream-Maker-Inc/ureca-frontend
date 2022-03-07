import { useEffect } from "react";
import { Typography } from "@mui/material";

// TODO Refactoring

export type VerificationTimerProps = {
  time: number;
  setTime: (time: number) => void;
  errorColor?: string;
  pause?: boolean;
};

const VerificationTimer = ({
  time,
  setTime,
  errorColor = "red",
  pause = false,
}: VerificationTimerProps) => {
  const isTimeWarning = time < 10;

  const timerColor = isTimeWarning ? errorColor : "default";
  useTimer(time, setTime, pause);

  //

  return (
    <Typography variant={"caption"} color={timerColor}>
      {toFormattedTime(time)}
    </Typography>
  );
};
export default VerificationTimer;

//

const useTimer = (
  time: number,
  setTime: (newTime: number) => void,
  pause: boolean
) => {
  useEffect(() => {
    const timeOver = time <= 0;

    const timerId = setInterval(() => {
      timeOver ? clearInterval(timerId) : setTime(time - 1);
    }, 1000);

    if (pause) {
      clearInterval(timerId);
    }

    return () => clearInterval(timerId);
  }, [time, setTime, pause]);
};

const toFormattedTime = (timeSeconds: number) => {
  const minutes = Math.floor(timeSeconds / 60);
  const seconds = Math.floor(timeSeconds % 60);

  const isMinutesZero = minutes === 0;

  return isMinutesZero ? `${seconds}초` : `${minutes}분 ${seconds}초`;
};
