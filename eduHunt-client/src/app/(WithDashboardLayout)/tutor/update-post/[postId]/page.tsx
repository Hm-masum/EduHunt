import UpdateTutorPostForm from "@/components/modules/TutorPost/UpdateTutorPostForm";
import { getSingleTutorPost } from "@/services/TutorPost";

const UpdateTutorPostPage = async ({
  params,
}: {
  params: Promise<{ postId: string }>;
}) => {
  const { postId } = await params;
  const { data: postData } = await getSingleTutorPost(postId);

  return (
    <div className="flex items-center justify-center">
      <UpdateTutorPostForm postData={postData} />
    </div>
  );
};

export default UpdateTutorPostPage;
