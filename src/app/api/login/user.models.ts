
export interface UserLoginReq {
    username?: string;
}

export interface UserLoginRes {
    resultCode: number;
    resultDescription?: string;
}