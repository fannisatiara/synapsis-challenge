import {TypeUser} from "@/data/Type/type-user";

export type TypeList = {
  listItem?: {
    user: TypeUser
        | undefined;
    id: string;
    user_id: number;
    title: string;
    body: string;
  }
}[];

export type ListUsers = {
  users: {
    name: string;
    id: string;
  }[];
};

export type ListPost = {
  id: number;
  user_id: number;
  title: string;
  body: string;
};
