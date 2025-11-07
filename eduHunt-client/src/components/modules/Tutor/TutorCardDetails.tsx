"use client";

import { ITutor } from "@/types";
import Image from "next/image";

const TutorCardDetails = ({ tutor }: { tutor: ITutor }) => {
  return (
    <div className="md:w-3/4 bg-white dark:bg-black border rounded-lg mx-auto flex flex-col md:flex-row gap-8 md:min-h-screen my-6">
      <div className="md:w-1/3 bg-gray-600 dark:bg-slate-700 md:min-h-screen p-5">
        <figure>
          <Image
            src={tutor.image || "/default-image.png"}
            width={600}
            height={100}
            alt="blog image"
            className="rounded-lg h-64 object-cover"
          />
        </figure>
        <div className="text-white space-y-1 mt-5 text-sm md:text-base">
          <h3>Name : {tutor?.name}</h3>
          <h3>Email : {tutor?.email}</h3>
          <h3>Father Name : {tutor?.fatherName}</h3>
          <h3>Mother Name : {tutor?.motherName}</h3>
          <h3>Phone : {tutor?.phone}</h3>
          <h3>Gender : {tutor?.gender}</h3>
          <h3>Thana : {tutor?.thana}</h3>
          <h3>District : {tutor?.district}</h3>
        </div>
      </div>
      <div className="md:w-2/3 space-y-5 p-5">
        <div className="space-y-3 flex flex-col">
          <h2 className="md:w-2/3 text-center bg-gray-200 dark:bg-slate-700 p-3 rounded-xl text-xl font-semibold">
            Educational Qualification
          </h2>
          <div className="space-y-1 text-sm md:text-base">
            <h3>
              Graduation Curriculum :{tutor.education?.graduationCurriculum}
            </h3>
            <h3>
              Graduation Institute :{tutor.education?.graduationInstitute}
            </h3>
            <h3>Graduation Subject : {tutor.education?.graduationSubject}</h3>
            <h3>
              Graduation Passing Year : {tutor.education?.graduationPassingYear}
            </h3>
            <h3>
              HSC Curriculum :{tutor.education?.higherSecondaryCurriculum}
            </h3>
            <h3>HSC Group :{tutor.education?.higherSecondaryGroup}</h3>
            <h3>HSC Institute :{tutor.education?.higherSecondaryInstitute}</h3>
            <h3>
              HSC Passing Year : {tutor.education?.higherSecondaryPassingYear}
            </h3>
            <h3>SSC Curriculum :{tutor.education?.secondaryCurriculum}</h3>
            <h3>SSC Group : {tutor.education?.secondaryGroup}</h3>
            <h3>SSC Institute : {tutor.education?.secondaryInstitute}</h3>
            <h3>SSC Passing Year : {tutor.education?.secondaryPassingYear}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorCardDetails;
