import { Chip, ChipProps } from "@mui/material";

export const OptionChip = (p: ChipProps) => (
  <Chip
    variant={"outlined"}
    size={"small"}
    sx={{
      cursor: "pointer",
      opacity: 0.8,
      fontWeight: 300,
    }}
    {...p}
  />
);
