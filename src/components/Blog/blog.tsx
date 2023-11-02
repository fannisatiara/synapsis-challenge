'use client'
import Card from "@/components/Card";
import Pagination from "@/components/Pagination";

interface Post {
  name: string
}
const Blog = ({ listItem }: [] | any) => {
  const renderItem = (item: {
    id: string;
    title: string;
    body: string;
    user: { name: string };
  }) => (
    <div>
      <Card
        id={item.id}
        title={item.title}
        desc={item.body}
        author={item.user.name}
      />
    </div>
  );
  return (
    <div className="flex flex-col gap-6 py-9">
      <Pagination<Post>
        data={listItem}
        itemsPerPage={10}
        renderItem={renderItem}
      />
    </div>
  );
};

export default Blog;

Blog.defaultProps = {
  listItem: [],
};
