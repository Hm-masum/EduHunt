import ManageStudentApplicant from "@/components/modules/TutorPost/ManageApplicant";
import { applicantInfoOfTutorPost } from "@/services/ApplyTutorPost";

const ApplicantInfoPage = async () => {
  const { data: posts } = await applicantInfoOfTutorPost();
  return (
    <div>
      <ManageStudentApplicant posts={posts} />
    </div>
  );
};

export default ApplicantInfoPage;
