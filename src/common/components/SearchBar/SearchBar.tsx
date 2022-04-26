import { SearchRounded } from "@mui/icons-material";
import {
  IconButton,
  InputAdornment,
  TextField,
  TextFieldProps,
} from "@mui/material";
import * as React from "react";

export type SearchBarProps = {
  onEndIconClick: () => void;
  textFieldProps?: TextFieldProps;
};

export const SearchBar = ({
  onEndIconClick,
  textFieldProps,
}: SearchBarProps) => (
  <TextField
    variant={"outlined"}
    placeholder={"검색"}
    InputProps={{
      sx: {
        paddingRight: 0,
      },
      endAdornment: (
        <InputAdornment position={"end"}>
          <IconButton onClick={onEndIconClick}>
            <SearchRounded />
          </IconButton>
        </InputAdornment>
      ),
    }}
    {...textFieldProps}
  />
);
