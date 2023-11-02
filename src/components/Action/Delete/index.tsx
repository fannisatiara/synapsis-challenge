import React, { FC, useState } from "react";
import { deleteUsers } from "@/data/Api/Users";
import ActionMessage from "@/components/Action/Message";

type action = {
  isOpen: boolean;
  onClose: () => void;
  id: string;
};

const ActionDelete: FC<action> = ({ isOpen, onClose, id }) => {
  const [messageAction, setMessageAction] = useState(false);
  const [message, setMessage] = useState<any>("");

  const DeleteUsers = async () => {
    const a = await deleteUsers(id);
    setMessageAction(true);
    setMessage(a.pesan);
  };
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full md:w-[400px] lg:w-[500px] md:px-5 sm:px-5">
        <h1 className="text-lg md:text-xl lg:text-2xl xl:text-2xl mb-4">
         Delete This User?
        </h1>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <button
            className="bg-yellow-500 text-white hover:border-2 hover:border-yellow-500 py-2 px-4 rounded-2xl mt-4"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-red-500 text-white hover:border-2 hover:border-red-500 py-2 px-4 rounded-2xl mt-4"
            onClick={() => DeleteUsers()}
          >
            Delete
          </button>
        </div>
      </div>
      <ActionMessage
        isOpen={messageAction}
        onClose={() => {
          setMessageAction(false);
          onClose();
        }}
        message={message}
      />
    </div>
  );
};

export default ActionDelete;
