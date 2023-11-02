export type ListUsers = {
    users: {
        name: string;
        id: string;
    }[];
};

export type TypeUser = {
    id: number;
    name: string;
    email: string;
    gender: string;
    status: string;
};

export type TypeUsersDetail = {
    id?:string;
    name?: string;
    email?: string;
    gender?: string;
    status?: string;
};