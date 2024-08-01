
export interface CustomerLoginReq {
    username?: string;
    password?: string;
}

export interface CustomerLoginRes {
    resultCode: number;
    resultDescription?: string;
    token?: string;
    data?: {
        username: string;
        lastname: string;
        telephone: string;
    };
}