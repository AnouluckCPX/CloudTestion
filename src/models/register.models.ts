
export interface UserRegister {
    username?: string;
    lastname?: string;
    telephone?: string;
    password?: string;
    id_card?: string;
    nationality?: string;
    village?: string;
    province?: string;
    district?: string;
    city?: string;
}

export interface UserRegisterRes {
    resultCode: number;
    resultDescription?: string;
}