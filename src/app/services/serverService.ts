import httpClient from "@/src/utils/httpClient";

export const getProfile = async () => {
    return (await httpClient.get(`/profile`)).data;
};