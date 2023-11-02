import { FC } from "react";
import { TypeDetail } from "@/data/Type/type-detail";
import { Metadata } from "next";
import UserDetail from "@/components/Detail/detail-user";
import { getUsers } from "@/data/Api/Users";

type PostDetailProps = {
  params: { id: string };
};
export async function generateStaticParams() {
  const users = await getUsers();
  return users.map((user) => ({ id: user.id }));
}

export async function generateMetadata({
  params,
}: PostDetailProps): Promise<Metadata> {
  const users = await getUsers();
  const user = users.find((user) => user.id === params.id);
  return {
    title: user?.id,
  };
}

const UserDetailPage: FC<PostDetailProps> = async ({
  params,
}) => {
  const users = await getUsers();
  const user = users.find((user) => user.id === params.id);
  return (
    <div>
      <UserDetail
        name={user?.name}
        email={user?.email}
        gender={user?.gender}
        status={user?.status}
      />
    </div>
  );
};

export default UserDetailPage;
