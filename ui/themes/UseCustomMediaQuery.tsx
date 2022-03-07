import useMediaQuery from "@mui/material/useMediaQuery";
import { ScreenType } from "./Limit";

export const useCustomMediaQuery = () => {
  const isExtraSmall = useMediaQuery(`(max-width:${ScreenType.xs}px)`);
  const isSmall = useMediaQuery(`(max-width:${ScreenType.sm}px)`);
  const isMedium = useMediaQuery(`(max-width:${ScreenType.md}px)`);
  const isLarge = useMediaQuery(`(max-width:${ScreenType.lg}px)`);
  const isTablet = useMediaQuery(`(max-width:${ScreenType.xl}px)`);
  const isLaptop = useMediaQuery(`(max-width:${ScreenType.xxl}px)`);

  return {
    isExtraSmall,
    isSmall,
    isMedium,
    isLarge,
    isTablet,
    isLaptop,
  };
};
