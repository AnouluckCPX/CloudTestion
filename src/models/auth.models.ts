import { UserData } from "./user.model";

export interface SignIn {
    message?: string;
    error?: string;
    data: {
        token: string;
        user: UserData | null;
        message?: string | undefined;
    }
}

export interface GetOtp {
    msisdn?: string;
    message?: string;
    error?: string;
}

export interface GetSession {
    message: string;
    error?: string;
    user?: UserData;
}

export interface APIResponse {
    message?: string;
    error?: string;

}