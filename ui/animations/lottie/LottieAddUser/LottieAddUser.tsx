import React from "react";
import animationData from "./lottie-add-user.json";
import Lottie, { Options } from "react-lottie";

const defaultOptions: Options = {
  loop: false,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {},
};

export type LottieAddUserProps = {
  width?: string;
  height?: string;
  completeCallback: () => void;
};

const LottieAddUser = ({
  width = "100%",
  height = "100%",
  completeCallback,
}: LottieAddUserProps) => {
  return (
    <>
      <Lottie
        options={defaultOptions}
        width={width}
        height={height}
        eventListeners={[{ eventName: "complete", callback: completeCallback }]}
      />
    </>
  );
};

export default React.memo(LottieAddUser);
