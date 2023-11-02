import { generateIdUser } from "@/data/generateId";
import { TypeUser } from "@/data/Type/type-user";

export async function getUsers() {
  const res = await fetch(
    `https://gorest.co.in/public/v2/users?page=1&per_page=100`,
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const resUser = (await res.json()) as TypeUser[];
  return resUser.map((user) => {
    const userFind = resUser.find((user) => user.id === user.id);
    const id = generateIdUser({ userId: user.id });
    return { ...user, userFind, id };
  });
}

export async function deleteUsers(params: string) {
  const headers = {
    Authorization:
      "Bearer 98b60d6bd02dc2a84df1441489534a21f56b92993673d0e173cfdcb79b234445",
  };
  try {
    const res = await fetch(`https://gorest.co.in/public/v2/users/${params}`, {
      method: "DELETE",
      headers,
    });
    const response = await res.json();
    if (response.message === "Resource not found")
      return { pesan: "User Not Found" };
    else return { message: "Delete Successful" };
  } catch (error) {
    return { message: "Error, please try again" };
  }
}

export async function addUsers(
  name: string,
  gender: string,
  email: string,
  status: string,
) {
  const headers = {
    Authorization:
      "Bearer 98b60d6bd02dc2a84df1441489534a21f56b92993673d0e173cfdcb79b234445",
    "Content-Type": "application/json",
  };
  const body = JSON.stringify({
    name: name,
    email: email,
    gender: gender,
    status: status,
  });
  try {
    const res = await fetch(`https://gorest.co.in/public/v2/users`, {
      method: "POST",
      headers,
      body,
    });
    if (res.status === 201) return { message: "Add Successful" };
    else return { message: "Error, please try again" };
  } catch (error) {
    return { message: "Error, please try Again" };
  }
}

export async function editUsers(
  id: string,
  name: string,
  gender: string,
  email: string,
  status: string,
) {
  const headers = {
    Authorization:
      "Bearer 98b60d6bd02dc2a84df1441489534a21f56b92993673d0e173cfdcb79b234445",
    "Content-Type": "application/json",
  };
  const body = JSON.stringify({
    name: name,
    email: email,
    gender: gender,
    status: status,
  });
  try {
    const res = await fetch(`https://gorest.co.in/public/v2/users/${id}`, {
      method: "PUT",
      headers,
      body,
    });
    if (res.status === 201) return { message: "Edit Successful" };
    else return { message: "Error, try Again" };
  } catch (error) {
    return { message: "Error, try Again" };
  }
}
