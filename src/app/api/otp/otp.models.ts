export interface OTPReq {
    username?: string;
    password: number;
}

export interface OTPRes {
    resultCode: number;
    resultDescription?: string;
    token?: string;
    data?: {
        username: string;
        lastname: string;
        telephone: string;
    };
}