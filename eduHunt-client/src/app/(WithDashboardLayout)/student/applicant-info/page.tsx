import ManageTutorApplicant from "@/components/modules/StudentPost/ManageApplicant";
import { applicantInfoOfStudentPost } from "@/services/ApplyStudentPost";

const ApplicantInfoPage = async () => {
  const { data: posts } = await applicantInfoOfStudentPost();
  return (
    <div>
      <ManageTutorApplicant posts={posts} />
    </div>
  );
};

export default ApplicantInfoPage;
