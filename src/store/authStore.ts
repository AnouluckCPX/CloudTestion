import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { APIResponse, GetOtp, SignIn } from '@/models/auth.models';
import httpClient from '@/utils/httpClient';
import { UserData } from '@/models/user.model';
import * as serverService from "@/services/serverService";

interface AuthState {
    description: string | undefined;
    error: string | null;
    message: string | undefined;
    loading: boolean;
    user: UserData | null;
    token: string | undefined;
    sendOtp: (username: string) => Promise<GetOtp>;
    logIn: (emp_code: string, otp: string) => Promise<SignIn>;
    logOut: () => Promise<void>;
}

interface SignResponse {
    message: string;
    error: string;
    data: {
        token: string;
        user: UserData | null;
        message?: string | undefined;
    };
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set, get) => ({
            description: undefined,
            loading: false,
            error: null,
            message: undefined,
            user: null,
            token: undefined,

            sendOtp: async (username: string): Promise<GetOtp> => {
                set({ loading: true });

                let res: GetOtp = { message: '', error: '', msisdn: '' };
                let sendData = { emp_code: username };

                try {
                    const response = await httpClient.post<GetOtp>('/otp/send', sendData);
                    res.message = response.data.message;
                    res.msisdn = response.data.msisdn;
                    // console.log(response);

                    if (response.status === 201) {
                        set({
                            message: res.msisdn,
                            loading: false,
                            description: res.msisdn,
                            user: null
                        });
                        return {
                            message: res.message,
                            msisdn: res.msisdn
                        };
                    } else {
                        set({
                            message: 'Get OTP failed',
                            loading: false,
                            user: null
                        });
                        return {
                            error: res.error,
                        };
                    }
                } catch (error) {
                    const serverError = error as AxiosError;
                    if (serverError.response && serverError.response.data) {
                        res = serverError.response.data as APIResponse;
                        // console.error('Server error:', res.error);
                    } else {
                        res.error = `${serverError.message}`;
                        // console.error('Unexpected error:', res.error);
                    }
                    return res;
                }
            },
            logIn: async (emp_code: string, otp: string): Promise<SignIn> => {
                set({ loading: true });
                let res: SignResponse = { message: '', error: '', data: { token: '', user: null, message: '' } };

                let sendData = {
                    emp_code: emp_code,
                    otp: otp
                }
                try {
                    const response = await serverService.signIn(sendData);
                    res.data = response.data;
                    res.data.token = response.data.token;
                    res.data.user = response.data.user;
                    res.data.message = response.data.message;

                    if (response.message === 'ok') {
                        set({
                            user: {
                                emp_code: res?.data?.user?.emp_code,
                                fname_la: res?.data?.user?.fname_la,
                                lname_la: res?.data?.user?.lname_la,
                                fname_en: res?.data?.user?.fname_en,
                                lname_en: res?.data?.user?.lname_en,
                                tel: res?.data?.user?.tel,
                            },
                            token: res.data.token,
                        })

                        httpClient.interceptors.request.use((config?: AxiosRequestConfig | any) => {
                            if (config && config.headers && response.data.token) {
                                config.headers["Authorization"] = `Bearer ${response.data.token}`;
                            }
                            return config;
                        });

                        return response
                    } else {
                        return {
                            message: res.data.message,
                            data: res.data
                        }
                    }

                } catch (error) {
                    const serverError = error as AxiosError;
                    if (serverError.response && serverError.response.data) {
                        res = serverError.response.data as SignResponse;
                        console.error('Server error:', res.error);
                    } else {
                        res.error = `An unexpected error occurred. Please try again later.`;
                        console.error('Unexpected error:', res.error);
                    }
                    res.error = `${error}`;
                    return {
                        error: res.error,
                        data: res?.data,
                        message: res.message,
                    }

                } finally {
                    set({ loading: false });
                }
            },
            logOut: async () => {
                set({ message: '' });

                try {
                    const response = await serverService.signOut();
                    if (response.message === 'ok') {
                        set({ user: null, message: 'logout' });
                    }
                } catch (error) {
                    set({ message: 'failed' });
                    console.log(error);
                }
            }
        }),
        {
            name: 'userCloud',
            partialize: (state) => ({
                user: state.user,
                message: state.message
            }),
        }
    )
);