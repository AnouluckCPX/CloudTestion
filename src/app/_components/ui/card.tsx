import React, { ReactNode } from 'react'
import { Card, styled, CardProps, CardContent } from '@mui/material';

const CustomCard = styled(Card)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    boxShadow: 'none',
    padding: theme.spacing(4, 6),
    borderRadius: 10,
    border: '1px solid #E5E5E5',
}));

interface CustomCardProps extends CardProps {
    children: ReactNode;
    classes?: {
        root?: string | undefined;
        label?: string | undefined;
    };
}

export const CustomCardBorder: React.FC<CustomCardProps> = ({ children, classes, ...props }) => {
    return (
        <CustomCard {...props} classes={classes}>
            <CardContent>
                {children}
            </CardContent>
        </CustomCard>
    );
};
