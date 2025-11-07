import SendMessage from "@/components/modules/About/SendMessage";
import Cover from "@/components/shared/Cover";

const AboutPage = () => {
  return (
    <div>
      <Cover title={"About"} subTitle={"Get in Touch With Us!"} />
      <SendMessage />
    </div>
  );
};

export default AboutPage;
