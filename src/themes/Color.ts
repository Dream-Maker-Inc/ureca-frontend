import { PaletteOptions } from "@mui/material";

/**
 * Light Theme Color
 * */
export enum LightColor {
  Primary = "#2D82FFce",
  PrimaryDeep = "#0061dc",
  PrimaryBright = "#E3F0FC",

  Danger = "#E74C3C",

  Grey600 = "#757575",
}

export const lightPalette: PaletteOptions = {
  primary: {
    main: LightColor.Primary,
  },
  secondary: {
    main: LightColor.PrimaryDeep,
  },
  text: {
    primary: LightColor.Grey600,
    secondary: "#222",
  },
  error: {
    main: LightColor.Danger,
  },
};

/**
 * Dark Theme Color
 * */
