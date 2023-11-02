import List from "@/components/Blog/blog";
import {getPostWithUser} from "@/data/Api/Blog";

export default async function Home() {
    const list = await getPostWithUser()
    return (
        <div>
            <List listItem={list} />
        </div>

    );
}
