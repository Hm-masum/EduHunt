import TutorCard from "@/components/modules/Tutor/TutorCard";
import { getAllTutors } from "@/services/Tutor";
import { ITutor } from "@/types";

const TutorsPage = async () => {
  const { data: tutorData } = await getAllTutors();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-10">
      {tutorData?.map((tutor: ITutor, idx: number) => (
        <TutorCard key={idx} tutor={tutor} />
      ))}
    </div>
  );
};

export default TutorsPage;
