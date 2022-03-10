import { useState } from "react";
import { SignupScene } from "../../types/SignupScene.type";

export const useSignupView = () => {
  const [scene, setScene] = useState<SignupScene>(SignupScene.Basic);
  const onSceneChange = (scene: SignupScene) => setScene(scene);

  const handleBasicFormSubmit = () => onSceneChange(SignupScene.VerifyPhone);
  const handleVerifyPhoneSubmit = () =>
    onSceneChange(SignupScene.VerifyPhoneCode);
  const handleVerifyPhoneCodeSubmit = () => onSceneChange(SignupScene.Welcome);
  const handleWelcomeAnimationComplete = (callback: () => void) => callback();

  return {
    scene,
    handleBasicFormSubmit,
    handleVerifyPhoneSubmit,
    handleVerifyPhoneCodeSubmit,
    handleWelcomeAnimationComplete,
  };
};
