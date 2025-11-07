import Image from "next/image";
import img from "../../../assets/banner3.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import SectionTitle from "@/components/shared/SectionTitle";

const FeatureTutor = () => {
  return (
    <div className="my-12">
      <SectionTitle
        title="Tutor"
        colorWord="Jobs"
        subtitle="Discover rewarding tutoring opportunities in your area and grow your teaching career."
      />

      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10">
        <div className="w-full md:w-[50%]">
          <Image
            src={img}
            className="w-full md:h-[370px] h-[250px]"
            alt="img1"
          />
        </div>
        <div className="space-y-2 w-full md:w-[50%]">
          <h2 className="text-xl md:text-3xl font-semibold text-center md:text-start">
            SEARCH TUTORING JOBS
          </h2>
          <h3 className="md:text-xl text-center md:text-start">
            Find Your Tuition Jobs, in your area
          </h3>
          <p className="text-gray-400 text-center md:text-start">
            Looking for interesting tuition jobs to excel your teaching
            experience? If teaching jobs interest you, then you are on the right
            place. We often have 500+ verified home tuition jobs. Whether you
            are starting your career or an expert, we can help you find your
            next big tuition job.
          </p>
          <div className="text-center md:text-start">
            <Link href={`/student-posts`}>
              <Button className="bg-purple-700 h-10">Find Tuition</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureTutor;
