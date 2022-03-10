import LockOutlined from "@mui/icons-material/LockOutlined";
import LockOpenOutlined from "@mui/icons-material/LockOpenOutlined";
import { IconButton, TextField, TextFieldProps, Tooltip } from "@mui/material";
import React, { ReactNode } from "react";
import { usePasswordTextField } from "./usePasswordTextField";

export type PasswordTextFieldProps = {
  endAdornment?: ReactNode;
} & TextFieldProps;

export const PasswordTextField = ({
  endAdornment,
  ...textFieldProps
}: PasswordTextFieldProps) => {
  const { inputType, isNotValidValue, isVisible, toggleVisiblity, tooltip } =
    usePasswordTextField(textFieldProps.value as string);

  return (
    <TextField
      variant={"outlined"}
      placeholder={"비밀번호"}
      type={inputType}
      InputProps={{
        startAdornment: (
          <Tooltip title={tooltip}>
            <span>
              <IconButton
                sx={{ ml: -1 }}
                disabled={isNotValidValue}
                onClick={toggleVisiblity}
              >
                {isVisible ? (
                  <LockOpenOutlined fontSize={"small"} />
                ) : (
                  <LockOutlined fontSize={"small"} />
                )}
              </IconButton>
            </span>
          </Tooltip>
        ),
        endAdornment,
      }}
      {...textFieldProps}
    />
  );
};
