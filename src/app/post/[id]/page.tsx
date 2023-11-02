import { FC } from "react";
import { getPostWithUser } from "@/data/Api/Blog";
import { Metadata } from "next";
import DetailBlog from "@/components/Detail/detail-blog";
import { getComments } from "@/data/Api/Comment";

type DetailPostProps = {
  params: { id: string };
};
export async function generateStaticParams() {
  const posts = await getPostWithUser();
  return posts.map((post) => ({ id: post.id }));
}

export async function generateMetadata({
  params,
}: DetailPostProps): Promise<Metadata> {
  const posts = await getPostWithUser();
  const post = posts.find((post) => post.id === params.id);

  return {
    title: post?.id,
  };
}

const DetailPost: FC<DetailPostProps> = async ({ params }) => {
  const posts = await getPostWithUser();
  const post = posts.find((post) => post.id === params.id);
  const Comment = await getComments(params.id);
  return (
    <div>
      <DetailBlog
        title={post?.title}
        desc={post?.body}
        author={post?.user?.name}
        comment={Comment} />
    </div>
  );
};

export default DetailPost;
