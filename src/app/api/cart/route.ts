import { NextRequest, NextResponse } from 'next/server';
import { cartData, ProfileResponse } from '@/models/cart.models';


export async function GET(request: NextRequest) {
    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get('page') || '1');
    const limit = parseInt(url.searchParams.get('limit') || '10');

    const sortedData = [...cartData].sort((a, b) => (b.package_id) - (a.package_id));

    const offset = (page - 1) * limit;
    const paginatedData = sortedData.slice(offset, offset + limit);

    const response: ProfileResponse = {
        resultCode: 200,
        resultDescription: 'Success',
        cart_data: paginatedData,
        total: cartData.length,
        page: page,
        limit: limit,
    };


    return NextResponse.json(response);
}