export interface IHub {
    name: string,
    id: string,
    age: number
}

export interface IGetHubs {
    Hubs: IHub[],
    id: string
}
