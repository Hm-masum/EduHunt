import ManageBlog from "@/components/modules/BlogPost/ManageBlog";
import { getMyBlogs } from "@/services/Blog";

const ManageBlogsPage = async () => {
  const { data: blogData } = await getMyBlogs();
  return (
    <div>
      <ManageBlog blogs={blogData} />
    </div>
  );
};

export default ManageBlogsPage;
