import axios from 'axios';
import { ProfileResponse } from '@/models/cart.models';

export const fetchCartData = async ({ page, pageSize }: { page: number; pageSize: number }): Promise<ProfileResponse> => {
    const response = await axios.get<ProfileResponse>(`/api/cart?page=${page}&limit=${pageSize}`);
    return response.data;
};


// export const fetchCartData = async (): Promise<ProfileResponse> => {
//     const response = await axios.get<ProfileResponse>(`/api/cart`);
//     return response.data;
// };