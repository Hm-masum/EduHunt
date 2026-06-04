import Banner from "@/components/modules/Home/Banner";
import FeatureStudent from "@/components/modules/Home/FeatureStudent";
import FeatureTutor from "@/components/modules/Home/FeatureTutor";
import ServiceCard from "@/components/modules/Home/ServiceCard";
import ChooseUS from "@/components/modules/Home/ChooseUs";
import Testimonial from "@/components/modules/Home/Testimonial";
import GetStarted from "@/components/modules/Home/GetStarted";

const page = () => {
  return (
    <div>
      <Banner />
      <div className="max-w-6xl mx-auto px-4">
        <ServiceCard />
        <FeatureTutor />
        <FeatureStudent />
        <ChooseUS />
        <Testimonial />
        <GetStarted />
      </div>
    </div>
  );
};

export default page;
