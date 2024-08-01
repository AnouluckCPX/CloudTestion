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

interface ButtonLoadingProps extends ButtonProps {
    children: ReactNode;
    loading?: boolean;
    loadingPosition?: 'start' | 'end' | 'center';
    classes?: {
        root?: string | undefined;
        label?: string | undefined;
    };
}

interface ButtonPrimaryProps extends ButtonProps {
    children: ReactNode;
    classes?: {
        root?: string | undefined;
        label?: string | undefined;
    };
}

interface ButtonSecondaryProps extends ButtonProps {
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

export const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({ children, classes, ...props }) => {
    return (
        <CustomButtonPrimary {...props} classes={classes}>
            {children}
        </CustomButtonPrimary>
    );
};

export const ButtonSecondary: React.FC<ButtonSecondaryProps> = ({ children, classes, ...props }) => {
    return (
        <CustomButtonSecondary {...props} classes={classes}>
            {children}
        </CustomButtonSecondary>
    );
};
