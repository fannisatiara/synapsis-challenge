"use client";
import { FC, useState } from "react";
import Link from "next/link";
import ActionAdd from "@/components/Action/Add";
import ActionDelete from "@/components/Action/Delete";
import ActionEdit from "@/components/Action/Edit";
import { ListUsers } from "@/data/Type/type-user";
import Pagination from "@/components/Pagination";

interface Post {
  name: string;
}

const Users: FC<ListUsers> = (props) => {
  const [actionAdd, setActionAdd] = useState(false);
  const [actionDelete, setActionDelete] = useState(false);
  const [actionEdit, setActionEdit] = useState(false);
  const [bio, setBio] = useState({
      name: "",
      email: "",
      gender: "",
      status: ""
  })
  const [isID, setIsID] = useState("");

  const renderItem = (e: any) => (
    <div>
      <div className="flex flex-row justify-between border-b-[2px] border-orange-300 border-dashed">
        <div className="hover:font-bold sm:text-[15px] md:text-xl lg:text-xl text-[15px]">
          {" "}
          <Link href={`users/${e.id}`}>{e.name}</Link>
        </div>
        <div className="flex flex-row gap-4">
        <img
            className="w-6 h-6"
            src={"edit.svg"}
            onClick={() => {
              setActionEdit(true);
              setIsID(e.id);
              setBio({name: e.name, email: e.email, gender: e.gender, status: e.status })
            }}
            alt={"ava"}
          />
          <img
            className="w-6 h-6 hover"
            src={"del.svg"}
            alt={"Ava"}
            onClick={() => {
              setActionDelete(true);
              setIsID(e.id);
            }}
          />
        </div>
      </div>
    </div>
  );

  return (
    <>
      <ActionAdd isOpen={actionAdd} onClose={() => setActionAdd(false)} />
      <ActionDelete
        isOpen={actionDelete}
        onClose={() => setActionDelete(false)}
        id={isID}
      />
      <div className="flex flex-row justify-center">
          <button
            onClick={() => setActionAdd(true)}
            className="font-bold border-2 border-yellow-500 w-25 h-20 w-[30%] rounded-2xl center hover:bg-yellow-500 hover:text-white"
          >
           + Add User
          </button>
      </div>
      <ActionEdit isOpen={actionEdit} onClose={() => setActionEdit(false)} id={isID} bio={bio} />
      <div className="flex-col flex gap-10 ">
        <div className="font-bold text-yellow-500 text-4xl">User List</div>
        <Pagination<Post>
          data={props.users}
          itemsPerPage={10}
          renderItem={renderItem}
        />
        
      </div>
    </>
  );
};

export default Users;
