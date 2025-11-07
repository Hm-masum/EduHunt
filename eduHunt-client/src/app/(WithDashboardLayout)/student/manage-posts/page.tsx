import ManageStudentPosts from "@/components/modules/StudentPost/ManageStudentPosts";
import { getMyStudentPosts } from "@/services/StudentPost";

const ManageStudentPostsPage = async () => {
  const { data: posts } = await getMyStudentPosts();
  return (
    <div>
      <ManageStudentPosts posts={posts} />
    </div>
  );
};

export default ManageStudentPostsPage;
