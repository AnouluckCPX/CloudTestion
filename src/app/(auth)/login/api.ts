import axios from 'axios';
import { CustomerLoginReq, CustomerLoginRes } from '../../api/logincustomer/customer.model';


const API_URL = '/api/logincustomer'; // Adjust this if your endpoint is different

export const customerlogin = async (loginData: CustomerLoginReq): Promise<CustomerLoginRes> => {
    try {
        const response = await axios.post<CustomerLoginRes>(API_URL, loginData);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            return error.response.data;
        }
        throw error;
    }
};