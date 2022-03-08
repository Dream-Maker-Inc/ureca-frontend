import { Typography } from "@mui/material";
import { useTimer } from "./useTimer";

export type TimerProps = {
  time: number;
  setTime: (time: number) => void;
  errorColor?: string;
  pause?: boolean;
};

export const Timer = ({
  time,
  setTime,
  errorColor = "red",
  pause = false,
}: TimerProps) => {
  const isTimeWarning = time < 10;

  const timerColor = isTimeWarning ? errorColor : "default";
  useTimer(time, setTime, pause);

  return (
    <Typography variant={"caption"} color={timerColor}>
      {toFormattedTime(time)}
    </Typography>
  );
};

const toFormattedTime = (timeSeconds: number) => {
  const minutes = Math.floor(timeSeconds / 60);
  const seconds = Math.floor(timeSeconds % 60);

  const isMinutesZero = minutes === 0;

  return isMinutesZero ? `${seconds}초` : `${minutes}분 ${seconds}초`;
};
