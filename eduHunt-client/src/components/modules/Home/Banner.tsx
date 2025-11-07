import Image from "next/image";
import banner from "../../../assets/banner2.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const Banner = () => {
  return (
    <div className="flex flex-col-reverse gap-6 md:flex-row items-center">
      <div className="space-y-4 md:w-1/2">
        <h2 className="text-xl font-semibold md:text-5xl text-center md:text-start">
          Learn With Fun On Any{" "}
          <span className="text-purple-600">Schedule</span>
        </h2>
        <p className="w-full md:w-2/3 text-center md:text-start">
          Find expert help in any subject, schedule sessions easily, and boost
          your learning with TutorLink.
        </p>
        <div className="text-center md:text-start">
          <Link href={"/tutors"}>
            <Button className="bg-purple-600 p-5 font-semibold">
              Find Tutor
            </Button>
          </Link>
        </div>
      </div>
      <div className="md:w-1/2">
        <Image
          src={banner}
          alt="image"
          className="h-[200px] md:h-[450px] w-[100%]"
        />
      </div>
    </div>
  );
};

export default Banner;
