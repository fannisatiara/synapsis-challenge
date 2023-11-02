"use client";
import React, { FC, useState } from "react";
import { TypeUsersDetail } from "@/data/Type/type-user";
import ActionDelete from "@/components/Action/Delete";
import ActionEdit from "@/components/Action/Edit";

const Users: FC<TypeUsersDetail> = (props) => {
  const [actionDelete, setActionDelete] = useState(false);
  const [actionEdit, setActionEdit] = useState(false);
  const [bio, setBio] = useState<any>({
    name: "",
    email: "",
    gender: "",
    status: "",
  });
  const [isID, setIsID] = useState<any>("");

  return (
    <div className="flex-col flex gap-5 p-6 md:p-10">
      <h1 className="font-bold text-yellow-500 text-2xl md:text-4xl">User Detail</h1>
      <table className="w-full border-separate border-spacing-y-3">
        <thead>
          <tr>
            <th className="pr-2 text-left">Name</th>
            <th className="px-0.5 md:px-2">:</th>
            <td className="pl-2">{props.name}</td>
          </tr>
          <tr>
            <th className="pr-2 text-left">Email</th>
            <th className="px-0.5 md:px-2">:</th>
            <td className="pl-2">{props.email}</td>
          </tr>
          <tr>
            <th className="pr-2 text-left">Gender</th>
            <th className="px-1 md:px-2">:</th>
            <td className="pl-2">{props.gender}</td>
          </tr>
          <tr>
            <th className="pr-2 text-left">Status</th>
            <th className="px-1 md:px-2">:</th>
            <td className="pl-2">{props.status}</td>
          </tr>
        </thead>
      </table>
      <div className="flex flex-col md:flex-row md:justify-between gap-4 ">
        <button
          onClick={() => {
            setActionEdit(true);
            setBio({
              name: props.name,
              email: props.email,
              gender: props.gender,
              status: props.status,
            });
          }}
          className="border-2 border-yellow-500 w-full md:w-[30%] h-12 md:h-15 rounded-2xl hover:bg-yellow-500"
        >
          Edit User
        </button>
        <button
          onClick={() => {
            setActionDelete(true);
            setIsID(props.id);
          }}
          className="border-2 border-yellow-500 w-full md:w-[30%] h-12 md:h-15 rounded-2xl hover:bg-yellow-500"
        >
          Delete User
        </button>
      </div>
      <ActionDelete
        isOpen={actionDelete}
        onClose={() => setActionDelete(false)}
        id={isID}
      />
      <ActionEdit
        isOpen={actionEdit}
        onClose={() => setActionEdit(false)}
        id={isID}
        bio={bio}
      />
    </div>
  );
};

export default Users;
