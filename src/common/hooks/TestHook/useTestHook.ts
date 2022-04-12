import { useCallback, useState } from "react";

export const useTestHook = () => {
  const [state, setState] = useState(false);
  const toggle = useCallback(() => setState((old) => !old), []);
  return {
    state,
    toggle,
  };
};
