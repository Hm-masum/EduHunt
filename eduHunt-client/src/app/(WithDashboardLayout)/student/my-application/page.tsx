import StudentApplication from "@/components/modules/Application/StudentApplication";
import { myApplicationInfoOfTutorPost } from "@/services/ApplyTutorPost";

const MyApplicationPage = async () => {
  const { data: applicationData } = await myApplicationInfoOfTutorPost();
  return (
    <div>
      <StudentApplication applicationData={applicationData} />
    </div>
  );
};

export default MyApplicationPage;
