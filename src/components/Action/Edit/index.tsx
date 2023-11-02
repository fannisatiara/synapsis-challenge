import React, {FC, useEffect, useState} from "react";
import {editUsers} from "@/data/Api/Users";
import ActionMessage from "@/components/Action/Message";

type action = {
  isOpen: boolean;
  onClose: () => void;
  id: string
  bio: {name:  string,
  email: string,
  gender: string,
  status: string},
};
const ActionEdit: FC<action> = ({ isOpen, onClose , id, bio}) => {
  const [messageAction, setMessageAction] = useState(false);
  const [message, setMessage] = useState<any>("");
  const [formData, setFormData] = useState({
    name: bio.name,
    email: bio.email,
    gender: bio.gender,
    status: bio.status,
  });

  useEffect(() => {
    setFormData(bio)
  }, [bio]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const a = await editUsers(id ,formData.name, formData.gender, formData.email, formData.status);
    setMessageAction(true);
    setMessage(a.message);
  };

  if (!isOpen) return null;
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-3xl shadow-md w-100 ">
        <h2 className="text-xl mb-4 font-bold">Edit Users</h2>
        <form onSubmit={handleSubmit}>
          <label className="block mb-2">
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-2xl  mt-1"
            />
          </label>
          <label className="block mb-2">
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-2xl  mt-1"
            />
          </label>
          <label className="block mb-2">
            Gender:
            <select
              name="gender"
              value={formData.gender}
              onChange={(e: any) => handleInputChange(e)}
              className="w-full p-2 border rounded-2xl mt-1"
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label>
          <label className="block mb-2">
            Gender:
            <select
              name="status"
              value={formData.status}
              onChange={(e: any) => handleInputChange(e)}
              className="w-full p-2 border rounded-2xl mt-1"
            >
              <option value="">Select</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </label>
          <button
            type="submit"
            className="bg-yellow-500 text-white hover:border-2 hover:border-yellow-500 py-2 px-4 rounded-2xl mt-4"
          >
            Save
          </button>
        </form>
        <button
          className="block mt-4 ml-auto text-sm text-gray-600 hover:text-gray-800"
          onClick={onClose}
        >
          Close
        </button>
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

export default ActionEdit;
