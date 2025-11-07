import ManageTutorPosts from "@/components/modules/TutorPost/ManageTutorPosts";
import { getMyTutorPosts } from "@/services/TutorPost";

const ManageTutorPostsPage = async () => {
  const { data: posts } = await getMyTutorPosts();
  return (
    <div>
      <ManageTutorPosts posts={posts} />
    </div>
  );
};

export default ManageTutorPostsPage;
