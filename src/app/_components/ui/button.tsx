import { Button, styled, ButtonProps } from '@mui/material'
import React, { ReactNode } from 'react'
import LoadingButton from '@mui/lab/LoadingButton';

const CustomButtonPrimary = styled(Button)(({ theme }) => ({
    backgroundColor: '#E53636',
    textAlign: 'left',
    color: '#fff',
    fontSize: '16px',
    height: '40px',
    boxShadow: 'none',
    border: 'none',
    borderRadius: '8px',
    textTransform: 'none',
    '&:hover': {
        backgroundColor: '#B81818',
        color: '#fff',
        boxShadow: 'none',
    },
}));

const CustomButtonLoading = styled(LoadingButton)(({ theme }) => ({
    '&.MuiLoadingButton-root': {
        backgroundColor: '#E53636',
        textAlign: 'left',
        color: '#fff',
        fontSize: '16px',
        height: '40px',
        boxShadow: 'none',
        borderRadius: '8px',
        textTransform: 'none',
    },
    '&:hover': {
        backgroundColor: '#B81818',
        color: '#fff',
        boxShadow: 'none',
    }
}));

const CustomButtonSecondary = styled(Button)(({ theme }) => ({
    textAlign: 'center',
    fontSize: '16px',
    boxShadow: 'none',
    borderRadius: '8px',
    textTransform: 'none',
    '&:hover': {
        backgroundColor: '#ffe4e6',
        color: '#E53636',
        boxShadow: 'none',
    },
}));

const CustomButtonApple = styled(Button)(({ theme }) => ({
    backgroundColor: '#727568',
    marginTop: '10px',
    textAlign: 'left',
    fontWeight: 'medium',
    color: '#fff',
    fontSize: '16px',
    height: '40px',
    boxShadow: 'none',
    borderRadius: '7px',
    textTransform: 'none',
    '&:hover': {
        backgroundColor: '#868A7B',
        color: '#fff',
        boxShadow: 'none',
    },
}));

interface ButtonLoadingProps extends ButtonProps {
    children: ReactNode;
    loading?: boolean;
    loadingPosition?: 'start' | 'end' | 'center';
    classes?: {
        root?: string | undefined;
        label?: string | undefined;
    };
}

interface ButtonPrimary extends ButtonProps {
    children: ReactNode;
    classes?: {
        root?: string | undefined;
        label?: string | undefined;
    };
}

export const ButtonLoading: React.FC<ButtonLoadingProps> = ({ children, classes, ...props }) => {
    return (
        <CustomButtonLoading {...props} classes={classes}>
            {children}
        </CustomButtonLoading>
    );
};

export const ButtonPrimary: React.FC<ButtonPrimary> = ({ children, classes, ...props }) => {
    return (
        <CustomButtonPrimary {...props} classes={classes}>
            {children}
        </CustomButtonPrimary>
    );
};

export const ButtonSecondary: React.FC<ButtonPrimary> = ({ children, classes, ...props }) => {
    return (
        <CustomButtonSecondary {...props} classes={classes}>
            {children}
        </CustomButtonSecondary>
    );
};

export const ButtonApple: React.FC<ButtonPrimary> = ({ children, classes, ...props }) => {
    return (
        <CustomButtonApple {...props} classes={classes}>
            {children}
        </CustomButtonApple>
    );
};
