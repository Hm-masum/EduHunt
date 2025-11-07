import Image from "next/image";
import img from "../../../assets/banner4.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import SectionTitle from "@/components/shared/SectionTitle";

const FeatureStudent = () => {
  return (
    <div className="my-12">
      <SectionTitle
        title="Find"
        colorWord="Tutor"
        subtitle="Connect with verified tutors nearby to boost your learning and academic performance."
      />

      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-4 md:gap-10">
        <div className="space-y-2 w-full md:w-[50%]">
          <h2 className="text-xl md:text-3xl font-semibold text-center md:text-start">
            FIND A TUTOR
          </h2>
          <h3 className="md:text-xl text-center md:text-start">
            Get the Right Help, Right Where You Are
          </h3>
          <p className="text-gray-400 text-center md:text-start">
            Looking for a tutor to improve your grades or understand a subject
            better? You are in the right place. Whether you need help with
            schoolwork, exam prep, or mastering a new skill, we connect you with
            500+ verified tutors in your area. No matter your level or subject,
            we’ll help you find the perfect tutor to support your learning
            journey.
          </p>
          <div className="text-center md:text-start">
            <Link href={`/tutor-posts`}>
              <Button className="bg-purple-700 h-10">Find Tutor</Button>
            </Link>
          </div>
        </div>
        <div className="w-full md:w-[50%]">
          <Image
            src={img}
            className="w-full md:h-[370px] h-[250px]"
            alt="img1"
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureStudent;
