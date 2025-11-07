"use client";

import { Button } from "@/components/ui/button";
import { createApplyTutorPost } from "@/services/ApplyTutorPost";
import { ITutorPost } from "@/types";
import { ArrowBigRightIcon } from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";

const TutorPostDetails = ({ post }: { post: ITutorPost }) => {
  const handleApply = async () => {
    try {
      const data = {
        tutorId: post.tutorId._id,
        tuitionId: post._id,
      };
      const res = await createApplyTutorPost(data);
      if (res.success) {
        toast.success("Applied Successfully");
      } else {
        toast.error(res.message || "Something went wrong");
      }
    } catch (err: any) {
      toast.error(err?.message);
    }
  };
  return (
    <div className="md:w-3/4 bg-white dark:bg-black border rounded-lg mx-auto flex flex-col md:flex-row gap-8 md:min-h-screen my-5">
      <div className="md:w-1/3 bg-gray-600 dark:bg-slate-700 md:min-h-screen p-5">
        <figure>
          <Image
            src={post.tutorId.image || "/default-image.png"}
            width={600}
            height={100}
            alt="blog image"
            className="rounded-lg h-64 object-cover"
          />
        </figure>
        <div className="text-white space-y-1 mt-5 text-sm md:text-base">
          <h3>Name : {post?.tutorId.name}</h3>
          <h3>Email : {post?.tutorId.email}</h3>
          <h3>Father Name : {post?.tutorId.fatherName}</h3>
          <h3>Mother Name : {post?.tutorId.motherName}</h3>
          <h3>Phone : {post?.tutorId.phone}</h3>
          <h3>Gender : {post?.tutorId.gender}</h3>
          <h3>Thana : {post?.tutorId.thana}</h3>
          <h3>District : {post?.tutorId.district}</h3>
        </div>
      </div>
      <div className="md:w-2/3 space-y-5 p-5">
        <div className="space-y-3 flex flex-col">
          <h2 className="md:w-2/3 text-center bg-gray-200 dark:bg-slate-700 p-3 rounded-xl text-xl font-semibold">
            Educational Qualification
          </h2>
          <div className="space-y-1 text-sm md:text-base">
            <h3>
              Graduation Curriculum :
              {post?.tutorId?.education?.graduationCurriculum}
            </h3>
            <h3>
              Graduation Institute :
              {post?.tutorId?.education?.graduationInstitute}
            </h3>
            <h3>
              Graduation Subject : {post?.tutorId?.education?.graduationSubject}
            </h3>
            <h3>
              HSC Curriculum :
              {post?.tutorId?.education?.higherSecondaryCurriculum}
            </h3>
            <h3>HSC Group :{post?.tutorId?.education?.higherSecondaryGroup}</h3>
            <h3>
              HSC Institute :{post.tutorId?.education?.higherSecondaryInstitute}
            </h3>
            <h3>
              SSC Curriculum :{post.tutorId?.education?.secondaryCurriculum}
            </h3>
            <h3>SSC Group : {post.tutorId.education?.secondaryGroup}</h3>
            <h3>
              SSC Institute : {post.tutorId.education?.secondaryInstitute}
            </h3>
          </div>
        </div>
        <div className="space-y-3">
          <h2 className="md:w-2/3 text-center bg-gray-200 dark:bg-slate-700 p-3 rounded-xl text-xl font-semibold">
            Post Overview
          </h2>
          <div className="space-y-1 text-sm md:text-base">
            <h3>Title : {post?.title}</h3>
            <h3>Tutoring Time : {post?.tutoringTime}</h3>
            <h3>Number of Student : {post?.numberOfStudent}</h3>
            <h3>Class : {post?.class}</h3>
            <h3>Days Per Week : {post?.daysPerWeek}</h3>
            <h3>Thana : {post?.thana}</h3>
            <h3>District : {post?.district}</h3>
            <h3>Curriculum : {post?.curriculum}</h3>
            <h3>Subject : {post?.subject}</h3>
            <h3>Salary : {post?.salary}</h3>
          </div>
        </div>
        <div>
          <Button onClick={handleApply} className="bg-purple-600">
            Apply <ArrowBigRightIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TutorPostDetails;
