import { create } from 'zustand';
import { CpuList, DiskList, MemoryList, PackageList } from '../models/package.models';
import { QueryData, QueryPostById } from '../app/hook/apiFeature';

interface PackageState {
    error: string | null;
    message: string | undefined;
    loading: boolean;
    loadingId: boolean;
    cpus: CpuList[] | null;
    disks: DiskList[] | null;
    mems: MemoryList[] | null;
    packages: PackageList[] | null;
    packageid: PackageList | null;
    getListCpu: () => Promise<void>;
    getListDisk: () => Promise<void>;
    getListMemory: () => Promise<void>;
    getListPackage: () => Promise<void>;
    getPackageById: (id: number) => Promise<void>;
}

export const usePackageOutStore = create<PackageState>()(
    (set, get) => ({
        error: null,
        message: undefined,
        loading: false,
        loadingId: false,
        cpus: null,
        disks: null,
        mems: null,
        packages: null,
        packageid: null,

        getListCpu: async (): Promise<void> => {
            set({ loading: true, cpus: null })
            try {
                const response = await QueryData(`/services/cpu`)

                if (response?.status === 200) {
                    const cpuList: CpuList[] = response?.data?.map((item: CpuList) => {
                        return {
                            cpu: item?.cpu,
                            cpu_id: item?.cpu_id,
                            cpu_name: item?.cpu_name,
                            cpu_price: item?.cpu_price,
                            cpu_unit: item?.cpu_unit,
                            status: item?.status
                        }
                    })
                    set({
                        loading: false,
                        cpus: cpuList,
                        message: 'Query success'
                    })
                }
            } catch (error) {
                set({ loading: false, cpus: null })
                console.log(error);
            }
        },
        getListDisk: async (): Promise<void> => {
            set({ loading: true, disks: null })
            try {
                const response = await QueryData(`/services/disk`)

                if (response?.status === 200) {
                    const diskList: DiskList[] = response?.data?.map((item: DiskList) => {
                        return {
                            disk: item?.disk,
                            dis_id: item?.dis_id,
                            dis_name: item?.dis_name,
                            dis_price: item?.dis_price,
                            dis_unit: item?.dis_unit,
                            status: item?.status
                        }
                    })
                    set({
                        loading: false,
                        disks: diskList,
                        message: 'Query success'
                    })
                }
            } catch (error) {
                set({ loading: false, disks: null })
                console.log(error);
            }
        },
        getListMemory: async (): Promise<void> => {
            set({ loading: true, mems: null })
            try {
                const response = await QueryData(`/services/memory`)

                if (response?.status === 200) {
                    const memoryList: MemoryList[] = response?.data?.map((item: MemoryList) => {
                        return {
                            memory: item?.memory,
                            me_id: item?.me_id,
                            me_name: item?.me_name,
                            me_price: item?.me_price,
                            me_unit: item?.me_unit,
                            status: item?.status
                        }
                    })
                    set({
                        loading: false,
                        mems: memoryList,
                        message: 'Query success'
                    })
                }
            } catch (error) {
                set({ loading: false, mems: null })
                console.log(error);
            }
        },
        getListPackage: async (): Promise<void> => {
            set({ loading: true })

            const response = await QueryData(`/package`)

            try {
                if (response?.status === 200) {
                    set({
                        loading: false,
                        packages: response?.data,
                        message: 'Query success'
                    })
                }
            } catch (error) {
                set({ loading: false })
            }

        },

        getPackageById: async (id: number): Promise<void> => {
            set({ loadingId: true, packageid: null })
            let data = { id: id }
            // console.log(data);
            const response = await QueryPostById(`/package/id`, data)

            try {
                if (response?.status === 200) {
                    set({ loadingId: false, packageid: response?.data[0], message: 'Query success' })
                }
            } catch (error) {
                set({ loadingId: false })
            }
        },

    })
)