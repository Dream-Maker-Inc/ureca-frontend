import VisibilityOffRounded from "@mui/icons-material/VisibilityOffRounded";
import VisibilityRounded from "@mui/icons-material/VisibilityRounded";
import { IconButton, TextField, TextFieldProps, Tooltip } from "@mui/material";
import React from "react";
import { usePasswordTextField2 } from "./usePasswordTextField2";

export type PasswordTextField2Props = {} & TextFieldProps;

export const PasswordTextField2 = ({
  ...textFieldProps
}: PasswordTextField2Props) => {
  const { inputType, isNotValidValue, isVisible, toggleVisiblity, tooltip } =
    usePasswordTextField2(textFieldProps?.value as string);

  return (
    <TextField
      variant={"outlined"}
      type={inputType}
      InputProps={{
        endAdornment: (
          <Tooltip title={tooltip}>
            <span>
              <IconButton disabled={isNotValidValue} onClick={toggleVisiblity}>
                {isVisible ? (
                  <VisibilityOffRounded fontSize={"small"} />
                ) : (
                  <VisibilityRounded fontSize={"small"} />
                )}
              </IconButton>
            </span>
          </Tooltip>
        ),
        sx: { paddingRight: "8px" },
      }}
      {...textFieldProps}
    />
  );
};
