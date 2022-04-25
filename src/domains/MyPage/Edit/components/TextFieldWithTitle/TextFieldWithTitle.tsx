import {Stack, TextField, TextFieldProps, Typography, TypographyProps} from "@mui/material";

export type TextFieldWithTitleProps = {
    title: string;
    desc: string;
    placeholder: string;
}

export const TextFieldWithTitle = ({title, desc, placeholder}: TextFieldWithTitleProps) => {
    return (
        <Stack gap={"6px"}>
            <Title>{title}</Title>
            <Desc>{desc}</Desc>
            <CustomTextField placeholder={placeholder}/>
        </Stack>
    )
}

const Title = (p: TypographyProps) => (
    <Typography variant={"subtitle1"} lineHeight={1} fontWeight={600} {...p} />
)

const Desc = (p: TypographyProps) => (
    <Typography variant={"body2"}  sx={{opacity: 0.9}}  {...p} />
)

const CustomTextField = (p: TextFieldProps) => (
    <TextField variant="outlined" {...p} />
)

