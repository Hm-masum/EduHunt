import UpdateStudentPostForm from "@/components/modules/StudentPost/UpdateStudentPostForm";
import { getSingleStudentPosts } from "@/services/StudentPost";

const UpdateStudentPostPage = async ({
  params,
}: {
  params: Promise<{ postId: string }>;
}) => {
  const { postId } = await params;
  const { data: postData } = await getSingleStudentPosts(postId);

  return (
    <div className="flex items-center justify-center">
      <UpdateStudentPostForm postData={postData} />
    </div>
  );
};

export default UpdateStudentPostPage;
