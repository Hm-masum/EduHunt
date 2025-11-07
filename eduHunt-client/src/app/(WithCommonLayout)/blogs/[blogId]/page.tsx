import BlogDetails from "@/components/modules/BlogPost/BlogDetails";
import { getSingleBlog } from "@/services/Blog";

const BlogDetailsPage = async ({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) => {
  const { blogId } = await params;
  const { data: blog } = await getSingleBlog(blogId);

  return (
    <div>
      <BlogDetails blog={blog} />
    </div>
  );
};

export default BlogDetailsPage;
