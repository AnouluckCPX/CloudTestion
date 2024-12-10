import { OutlinedInput, styled } from "@mui/material";
import { ReactNode } from "react";

const OutlinedInputStyle = styled(OutlinedInput)(({ theme }) => ({
    borderRadius: '7px',
    height: '38px',
    // border: '2px solid #DDD',
    // '&:hover': {
    //     border: '2px solid #DDD',
    // },
    // '&.Mui-focused': {
    //     border: '2px solid #DDD',
    // },
}));

interface OutlinedInputStyle {
    children?: ReactNode;
    classes?: {
        root?: string | undefined;
        label?: string | undefined;
    }
    root?: string | undefined
    label?: string | undefined
    value?: string | number | readonly string[] | undefined
    multiline?: boolean
    maxRows?: number | undefined
    minRows?: number | undefined
}

export const OutlinedInputCustom: React.FC<OutlinedInputStyle> = ({
    classes,
    ...props
}) => {
    return (
        <OutlinedInput
            {...props}
            classes={classes}
            autoComplete='off'
            className='rounded-lg'
            fullWidth
            size='small'
            value={props.value}
            multiline={props.multiline}
            maxRows={props.maxRows}
            minRows={props.minRows}
        />
    )
}