import UpdateStudentProfileForm from "@/components/modules/MyProfile/UpdateStudentProfileForm";
import UpdateTutorProfileForm from "@/components/modules/MyProfile/UpdateTutorProfileForm";
import { getMe } from "@/services/AuthService";

const UpdateProfilePage = async () => {
  const { data: userData } = await getMe();
  return (
    <div className="flex items-center justify-center">
      {userData?.role === "tutor" ? (
        <UpdateTutorProfileForm userData={userData} />
      ) : (
        <UpdateStudentProfileForm userData={userData} />
      )}
    </div>
  );
};

export default UpdateProfilePage;
