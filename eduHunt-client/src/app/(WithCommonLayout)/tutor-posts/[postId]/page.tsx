import TutorPostDetails from "@/components/modules/TutorPost/TutorPostDetails";
import { getSingleTutorPost } from "@/services/TutorPost";

const TutorPostDetailsPage = async ({
  params,
}: {
  params: Promise<{ postId: string }>;
}) => {
  const { postId } = await params;
  const { data: post } = await getSingleTutorPost(postId);
  return (
    <div className="">
      <TutorPostDetails post={post} />
    </div>
  );
};

export default TutorPostDetailsPage;
