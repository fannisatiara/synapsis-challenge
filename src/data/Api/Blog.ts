import { generateIdPost } from "@/data/generateId";
import { TypeUser } from "@/data/Type/type-user";
import {ListPost} from "@/data/Type/type-list";

export async function getPostWithUser() {
  const res = await fetch("https://gorest.co.in/public/v2/posts?page=1&per_page=100");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const posts = (await res.json()) as ListPost[];

  const x = await Promise.all(
    posts?.map(async (e: { user_id: number }) => {
      try {
        const res = await fetch(
          `https://gorest.co.in/public/v2/users/${e?.user_id}`,
        );
        const response = res.json();
        const c: {message : string} = (await response);
        if (c.message === "Resource not found") {
          return {
            id: e.user_id,
            name: " ",
          } as TypeUser;
        } else
          return {
            id: e.user_id,
            name: " ",
          } as TypeUser;
      } catch (error) {
        return {
          id: e.user_id,
          name: " ",
        } as TypeUser;
      }
    }),
  );
  return posts.map((post) => {
    const user = x.find((user) => user.id === post.user_id);
    const id = generateIdPost({ postId: post.id });
    return { ...post, user, id };
  });
}
