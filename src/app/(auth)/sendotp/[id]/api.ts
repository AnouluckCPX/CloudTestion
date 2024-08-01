import axios from 'axios';
import { OTPReq, OTPRes } from '../../../api/otp/otp.models';


const API_URL = '/api/otp'; // Adjust this if your endpoint is different

export const verifyOTP = async (data: OTPReq): Promise<OTPRes> => {
    try {
        const response = await axios.post<OTPRes>(API_URL, data);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            return error.response.data;
        }
        throw error;
    }
};