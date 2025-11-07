import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import img from "../../../assets/faq.jpg";
import SectionTitle from "@/components/shared/SectionTitle";

const FAQSection = () => {
  return (
    <div className="my-10">
      <SectionTitle
        title="Frequently Asked"
        colorWord="Questions"
        subtitle="We've gathered answers to the questions and feel free to contact us anytime."
      />1

      <div className="flex bg-white dark:border-gray-500 dark:bg-black flex-col border rounded-xl p-5 md:flex-row gap-5 items-center justify-between my-5">
        <div className="w-full md:w-1/2">
          <Image className="rounded-xl w-[100%] h-full" src={img} alt="" />
        </div>

        <div className="w-full md:w-1/2">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="no-underline hover:no-underline">
                What is Tutor Link and how does it work?
              </AccordionTrigger>
              <AccordionContent>
                Tutor Link is an online platform that connects students with
                qualified tutors for one-on-one learning.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="no-underline hover:no-underline">
                How do I sign up as a student or tutor?
              </AccordionTrigger>
              <AccordionContent>
                Signing up is easy! Just click the register button on the
                homepage, choose whether you are a student or tutor, and fill
                out the required information.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="no-underline hover:no-underline">
                Is Tutor Link free to use?
              </AccordionTrigger>
              <AccordionContent>
                Creating an account and browsing tutors is completely free
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="no-underline hover:no-underline">
                How do I find the right tutor for my subject?
              </AccordionTrigger>
              <AccordionContent>
                ou can use our search and filter options to find tutors based on
                subject, level, availability.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="no-underline hover:no-underline">
                Can I schedule classes at my preferred time?
              </AccordionTrigger>
              <AccordionContent>
                Yes! You can view each tutor’s availability and book a session
                that fits your schedule.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger className="no-underline hover:no-underline">
                Are the tutors verified or qualified?
              </AccordionTrigger>
              <AccordionContent>
                Yes, all tutors go through a verification process. We check
                their qualifications, experience
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger className="no-underline hover:no-underline">
                How is payment handled between students and tutors?
              </AccordionTrigger>
              <AccordionContent>
                Payments are securely processed through our platform.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
