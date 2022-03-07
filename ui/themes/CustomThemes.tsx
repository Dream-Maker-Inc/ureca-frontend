import { createTheme } from "@mui/material/styles";
import { useMemo, useState } from "react";
import { lightPalette } from "./Color";
import { ScreenType } from "./Limit";
import { Shape } from "./Shape";
import { lightTypographyOptions } from "./Typography";

export const lightTheme = createTheme({
  palette: lightPalette,
  typography: lightTypographyOptions,
  shape: { borderRadius: 8 },
  breakpoints: {
    values: {
      xs: 0,
      sm: ScreenType.sm + 1,
      md: ScreenType.md + 1,
      lg: ScreenType.lg + 1,
      xl: ScreenType.xl + 1,
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: "8px",
          },

          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#e9e9e9",
          },
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: Shape.Medium,
          textTransform: "none",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: Shape.Large,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        sizeSmall: {
          height: "22px",
          fontSize: "12px",
          padding: "0px 6px",
        },
      },
    },
  },
});

export enum ThemeTypes {
  Light,
  Dark,
}

export const findTheme = (theme: ThemeTypes) => {
  switch (theme) {
    default:
      return lightTheme;
  }
};

export const useThemeHook = () => {
  const [theme, setTheme] = useState(findTheme(ThemeTypes.Light));
  const palette = theme.palette;

  const colorMode = useMemo(
    () => (theme: ThemeTypes) => setTheme(findTheme(theme)),
    []
  );

  return {
    theme,
    palette,
    colorMode,
  };
};
