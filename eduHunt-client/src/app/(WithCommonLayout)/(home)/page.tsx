import Banner from "@/components/modules/Home/Banner";
import FeatureStudent from "@/components/modules/Home/FeatureStudent";
import FeatureTutor from "@/components/modules/Home/FeatureTutor";

import ServiceCard from "@/components/modules/Home/ServiceCard";
import ChooseUS from "@/components/modules/Home/ChooseUs";
import Testimonial from "@/components/modules/Home/Testimonial";
import GetStarted from "@/components/modules/Home/GetStarted";

const page = () => {
  return (
    <div className="p-3 md:py-6 md:px-10">
      <Banner />
      <ServiceCard />
      <FeatureTutor />
      <FeatureStudent />
      <GetStarted />
      <ChooseUS />
      <Testimonial />
    </div>
  );
};

export default page;
