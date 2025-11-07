import UpdateBlogForm from "@/components/modules/BlogPost/UpdateBlogForm";
import { getSingleBlog } from "@/services/Blog";

const UpdateBlogPage = async ({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) => {
  const { blogId } = await params;
  const { data: blogData } = await getSingleBlog(blogId);

  return (
    <div className="flex items-center justify-center">
      <UpdateBlogForm blogData={blogData} />
    </div>
  );
};

export default UpdateBlogPage;
