import { create } from 'zustand';
import { QueryData, QueryPostById } from '../app/hook/apiFeature';

interface System {
    id: number;
    name: string;
    status: number;
}


interface SystemVersion {
    id: number
    os_id: number
    version_os: string
    status: string
}

interface SystemState {
    systems: System[];
    versions: SystemVersion[];
    loading: boolean;
    error: string | null;
    querySystems: () => void;
    querySystemsByVersion: (id: number) => void;
}

const useSystemStore = create<SystemState>((set) => ({
    systems: [],
    versions: [],
    loading: false,
    error: null,

    querySystems: async () => {
        set({ loading: true, error: null });
        try {
            const response = await QueryData('/os');

            if (response.status === 200) {
                let fiterByStatus = response.data.filter((item: System) => item.status === 1);
                set({ systems: fiterByStatus, loading: false });
            }
        } catch (error) {
            set({ error: 'Failed to fetch system data', loading: false });
        }
    },
    querySystemsByVersion: async (id: number) => {
        set({ loading: true, error: null });
        try {
            let data = { os_id: id }
            const response = await QueryPostById('/os/version/id', data);
            // console.log(response);
            if (response.status === 200) {
                let fiterByStatus = response.data.filter((item: SystemVersion) => item.status === "active");
                set({ versions: fiterByStatus, loading: false });
            }
        } catch (error) {
            set({ error: 'Failed to fetch system data', loading: false });
        }
    }
}));

export default useSystemStore;