export interface UserProfile {
    username: string;
    lastname: string;
    telephone: string;
    email: string;
}

export interface ProfileResponse {
    resultCode: number;
    resultDescription?: string;
    profile?: UserProfile;
}