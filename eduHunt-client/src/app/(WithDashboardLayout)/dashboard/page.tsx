import StudentStatistics from "@/components/modules/Statistics/StudentStatistics";
import TutorStatistics from "@/components/modules/Statistics/TutorStatistics";
import { getMe } from "@/services/AuthService";

const DashboardPage = async () => {
  const { data: userData } = await getMe();
  return (
    <div>
      {userData?.role === "tutor" ? <TutorStatistics /> : <StudentStatistics />}
    </div>
  );
};

export default DashboardPage;
