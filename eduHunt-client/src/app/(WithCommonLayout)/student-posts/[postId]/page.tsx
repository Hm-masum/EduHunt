import StudentPostDetails from "@/components/modules/StudentPost/StudentPostDetails";
import { getSingleStudentPosts } from "@/services/StudentPost";

const StudentPostDetailsPage = async ({
  params,
}: {
  params: Promise<{ postId: string }>;
}) => {
  const { postId } = await params;
  const { data: post } = await getSingleStudentPosts(postId);
  return (
    <div>
      <StudentPostDetails post={post} />
    </div>
  );
};

export default StudentPostDetailsPage;
