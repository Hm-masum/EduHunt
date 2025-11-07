import Image from "next/image";
import img1 from "../../../assets/cart1.jpg";
import img2 from "../../../assets/cart2.jpg";
import img3 from "../../../assets/cart3.jpg";
import img4 from "../../../assets/cart4.jpg";
import SectionTitle from "@/components/shared/SectionTitle";

const ServiceCard = () => {
  return (
    <div>
      <SectionTitle
        title="Our "
        subtitle="TutorLink offers everything you need to succeed."
        colorWord="Service"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="p-3 border dark:border-gray-500 rounded-lg space-y-2 bg-white dark:bg-black">
          <Image
            src={img1}
            className="w-full h-[200px] rounded-lg"
            alt="img1"
          />
          <h1 className="text-lg font-semibold md:text-2xl">What We Offer</h1>
          <p className="text-sm">
            TutorLink is your one-stop solution for personalized learning. We
            match students with the best tutors based on learning style, and
            availability. Every session is interactive, and designed to boost
            your confidence.
          </p>
        </div>
        <div className="p-3 border dark:border-gray-500 rounded-lg space-y-2 bg-white dark:bg-black">
          <Image
            src={img2}
            className="w-full h-[200px] rounded-lg"
            alt="img1"
          />
          <h1 className="text-lg font-semibold md:text-2xl">What We Produce</h1>
          <p className="text-sm">
            At TutorLink, we connect students with experienced and verified
            tutors across a wide range of subjects. Our platform offers flexible
            scheduling, real-time messaging, and progress tracking features.
          </p>
        </div>
        <div className="p-3 border dark:border-gray-500 rounded-lg space-y-2 bg-white dark:bg-black">
          <Image
            src={img3}
            className="w-full h-[200px] rounded-lg"
            alt="img1"
          />
          <h1 className="text-lg font-semibold md:text-2xl">
            Learn Smarter with us
          </h1>
          <p className="text-sm">
            Say goodbye to boring classes and hello to personalized learning
            experiences. Our tutors use modern tools and methods to make lessons
            engaging and effective.
          </p>
        </div>
        <div className="p-3 border dark:border-gray-500 rounded-lg space-y-2 bg-white dark:bg-black">
          <Image
            src={img4}
            className="w-full h-[200px] rounded-lg"
            alt="img1"
          />
          <h1 className="text-lg font-semibold md:text-2xl">
            Success, Mission
          </h1>
          <p className="text-sm">
            At TutorLink, we believe every student has the potential to shine.
            That’s why we offer expert guidance, consistent support, and
            tailored study plans.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
