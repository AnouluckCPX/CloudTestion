import React, { useEffect, useState } from 'react';
import { CustomCardBorder } from '../../../_components/ui/card';
import { Box, Typography } from '@mui/material';
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { fetchCartData } from './api';
import { CartList } from '@/models/cart.models';
import dayjs from "dayjs";

type Props = {};

export default function CardTransaction({ }: Props) {
    const [cartData, setCartData] = useState<CartList[]>([]);
    const [totalItems, setTotalItems] = useState<number>(0);
    const [currentPage, setCurrentPage] = useState<number>(0);
    const [pageSize, setPageSize] = useState<number>(10);

    const getCartData = async (page: number, pageSize: number) => {
        const data = await fetchCartData({ page: page + 1, pageSize: pageSize });
        return {
            result: data.cart_data || [],
            count: data.total
        }
    };

    const refreshData = async () => {
        const returnValues = await getCartData(currentPage, pageSize);
        const changed = returnValues.result?.map((value: any) => {
            return { ...value };
        })
        setTotalItems(returnValues.count || 0);
        setCartData(changed);

    }

    const onPageChange = (newPage: number) => {
        setCurrentPage(newPage);
        // refreshData();
    };

    const onPageSizeChange = (newPageSize: number) => {
        setPageSize(newPageSize);
        // refreshData();
    };

    useEffect(() => {
        const refreshData = async () => {
            const returnValues = await getCartData(currentPage, pageSize);
            const changed = returnValues.result?.map((value: any) => {
                return { ...value };
            });
            setTotalItems(returnValues.count || 0);
            setCartData(changed);
        };

        const fetchData = async () => {
            await refreshData();
        };
        fetchData();
    }, [currentPage, pageSize]);


    const columns: GridColDef[] = [
        {
            field: 'date',
            headerName: 'Date',
            width: 150,
            renderCell: ({ value }) => (
                <Typography variant="body2">
                    {dayjs(value).format("DD-MM-YYYY HH:mm")}
                </Typography>
            ),
        },
        { field: 'package_id', headerName: 'Package ID', width: 150 },
        { field: 'package_name', headerName: 'Package Name', width: 200 },
        { field: 'status', headerName: 'Status', width: 150 },
        { field: 'price', headerName: 'Price', width: 100 },
        { field: 'quantity', headerName: 'Quantity', width: 100 },
        { field: 'total', headerName: 'Total', width: 100 },
    ];

    return (
        <CustomCardBorder className='py-3'>
            <Box>
                <h3 className='font-bold text-lg mb-5'>Transactions Your Cart</h3>
                <DataGrid
                    autoHeight
                    columns={columns}
                    rowCount={totalItems}
                    rows={cartData}
                    pagination
                    paginationMode="server"
                    page={currentPage}
                    pageSize={pageSize}
                    onPageChange={onPageChange}
                    onPageSizeChange={onPageSizeChange}
                    rowsPerPageOptions={[10, 25, 50]}
                    getRowId={(row) => row.package_id}
                />
            </Box>
        </CustomCardBorder>
    );
}

