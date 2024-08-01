import axios from 'axios';
import { UserLoginReq, UserLoginRes } from '../../api/login/user.models';


const API_URL = '/api/login'; // Adjust this if your endpoint is different

export const authlogin = async (loginData: UserLoginReq): Promise<UserLoginRes> => {
    try {
        const response = await axios.post<UserLoginRes>(API_URL, loginData);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            return error.response.data;
        }
        throw error;
    }
};