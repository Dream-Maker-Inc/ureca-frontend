import { LockOpenOutlined, LockOutlined } from "@mui/icons-material";
import { IconButton, TextField, TextFieldProps, Tooltip } from "@mui/material";
import React, { ReactNode, useState } from "react";

export type PasswordTextFieldProps = {
  endAdornment?: ReactNode;
} & TextFieldProps;

export const PasswordTextField = (p: PasswordTextFieldProps) => {
  const { endAdornment, ...textFieldProps } = p;

  const [isVisible, setVisible] = useState(false);
  const toggleVisiblity = () => setVisible(!isVisible);

  const isNotValidValue = !textFieldProps.value;
  const inputType = isVisible ? "text" : "password";
  const tooltipTitle = isVisible ? "비밀번호 숨기기" : "비밀번호 보이기";
  const icon = isVisible ? (
    <LockOpenOutlined fontSize={"small"} />
  ) : (
    <LockOutlined fontSize={"small"} />
  );

  return (
    <TextField
      variant={"outlined"}
      placeholder={"비밀번호"}
      type={inputType}
      InputProps={{
        startAdornment: (
          <Tooltip title={tooltipTitle}>
            <IconButton
              sx={{ ml: -1 }}
              disabled={isNotValidValue}
              onClick={toggleVisiblity}
            >
              {icon}
            </IconButton>
          </Tooltip>
        ),
        endAdornment: endAdornment,
      }}
      {...textFieldProps}
    />
  );
};
