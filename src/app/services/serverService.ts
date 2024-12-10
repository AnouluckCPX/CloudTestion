import { SignIn } from "@/src/models/auth.models";
import httpClient from "@/src/utils/httpClient";

type signProps = {
    emp_code: string;
    otp: string;
};

export const getProfile = async () => {
    return (await httpClient.get(`/profile`)).data;
};

export const signIn = async (user: signProps): Promise<SignIn> => {
    const response = await httpClient.post<SignIn>(`/auth/signin`, user, {
        baseURL: process.env.NEXT_PUBLIC_BASE_URL_LOCAL_API,
    });

    return response.data;
};

export async function signOut() {
    const response = await httpClient.get(`/auth/signout`, {
        baseURL: process.env.NEXT_PUBLIC_BASE_URL_LOCAL_API,
    });
    return response.data;
}