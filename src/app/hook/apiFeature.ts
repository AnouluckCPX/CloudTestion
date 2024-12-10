import axios from "axios";
import httpClient from '@/utils/httpClient';

export const QueryData = async (url: string) => {
    try {
        const response = await httpClient.get(url);
        return response;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            if (error.response?.data === undefined) {
                console.log('An error occurred:', error.message);
            } else {
                console.log(error.response?.data);
                if (error.response?.data?.message) {
                    return error.response?.data?.message
                }
            }
        } else {
            console.error('Error fetching data', error);
        }
    }
};


export const QueryPostById = async (url: string, data: any = {}) => {
    try {
        const response = await httpClient.post(url, data);
        return response;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            if (error.response?.data === undefined) {
                console.log('An error occurred:', error.message);
            } else {
                console.log(error.response?.data);
                if (error.response?.data?.message) {
                    return error.response?.data?.message
                }
            }
        } else {
            console.error('Error fetching data', error);
        }
    }
};