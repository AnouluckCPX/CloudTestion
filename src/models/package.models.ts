export interface PackageList {
    p_id: number
    price: number
    topic: string
    cpu: number
    memory: number
    disk: number
    ip: number
    status: number
    options: Option[]
}

export interface Option {
    id: number
    datacenter_tier: string
    firewall: string
    backup_on_site: string
    bandwidth: string
    support: string
    migration: string
    consultation: string
    customize: string
}


export interface CpuList {
    cpu_id: number
    cpu_name: string
    cpu: number
    cpu_unit: string
    cpu_price: number
    create_at?: string
    status: number
}

export interface DiskList {
    dis_id: number
    dis_name: string
    disk: number
    dis_unit: string
    dis_price: number
    create_at?: string
    status: number
}

export interface MemoryList {
    me_id: number
    me_name: string
    memory: number
    me_unit: string
    me_price: number
    create_at: string
    status: number
}
