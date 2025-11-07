import FAQSection from "@/components/modules/FAQ/FAQSection";
import Cover from "@/components/shared/Cover";

const FaqPage = () => {
  return (
    <div>
      <Cover
        title={"FAQ"}
        subTitle={"Everything You Need to Know About EduHunt!"}
      />
      <FAQSection />
    </div>
  );
};

export default FaqPage;
