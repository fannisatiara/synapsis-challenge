import Users from "@/components/Users";
import { getUsers } from "@/data/Api/Users";

const UsersList:any = async () => {
  const UsersList = await getUsers();
  return (
    <div className="flex-col flex gap-5 py-5">
      <Users users={UsersList} />
    </div>
  );
};

export default UsersList;
