import TutorCardDetails from "@/components/modules/Tutor/TutorCardDetails";
import { getSingleTutor } from "@/services/Tutor";
import React from "react";

const TutorDetailsPage = async ({
  params,
}: {
  params: Promise<{ tutorId: string }>;
}) => {
  const { tutorId } = await params;
  const { data: tutor } = await getSingleTutor(tutorId);

  return (
    <div>
      <TutorCardDetails tutor={tutor} />
    </div>
  );
};
export default TutorDetailsPage;
