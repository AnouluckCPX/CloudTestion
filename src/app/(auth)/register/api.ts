import axios from 'axios';
import { UserRegister, UserRegisterRes } from '@/models/register.models';

const API_URL = '/api/register';

export const authRegister = async (registerData: UserRegister): Promise<UserRegisterRes> => {
    try {
        const response = await axios.post<UserRegisterRes>(API_URL, registerData);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            return error.response.data as UserRegisterRes;
        }
        throw error;
    }
};