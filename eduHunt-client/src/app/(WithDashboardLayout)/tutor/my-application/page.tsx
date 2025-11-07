import TutorApplication from "@/components/modules/Application/TutorApplication";
import { myApplicationInfoOfStudentPost } from "@/services/ApplyStudentPost";

const MyApplicationPage = async () => {
  const { data: applicationData } = await myApplicationInfoOfStudentPost();
  return (
    <div>
      <TutorApplication applicationData={applicationData} />
    </div>
  );
};

export default MyApplicationPage;
