"use client";

import imgBg from "../../../assets/message.jpg";
import logo from "../../../assets/logo.png";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import SectionTitle from "@/components/shared/SectionTitle";

const SendMessage = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async () => {
    toast.success("Successfully send your message. We will contact you soon!");
  };

  return (
    <div className="my-10">
      <SectionTitle
        title="Contact"
        colorWord="EduHunt"
        subtitle="Our team is ready to answer your queries and assist you with your goals."
      />

      <div className="flex shadow border dark:border-gray-600 bg-white dark:bg-gray-800 flex-col md:flex-row items-center justify-center rounded-lg">
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <Image className="w-full h-[250px] md:h-[480px]" src={imgBg} alt="" />
        </div>

        <div className="w-full md:w-1/2 p-5  md:h-[480px] md:p-8 lg:px-10 lg:py-10  space-y-3">
          <div className="flex items-center justify-center">
            <Image width={40} height={40} src={logo} alt="" />
            <h2 className="font-semibold md:text-3xl">
              Edu<span className="text-purple-800">Hunt</span>
            </h2>
          </div>

          <h2 className="text-base text-center">
            Welcome to EduHunt. Send your message!
          </h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-3">
              <div>
                <label className="block mb text-sm">Name</label>
                <div className="mt-2">
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    {...register("name", { required: true })}
                    className="w-full p-2 border rounded-md border-gray-400"
                  />
                </div>
              </div>

              <div>
                <label className="block mb text-sm">Email address</label>
                <div className="mt-2">
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    {...register("email", { required: true })}
                    className="w-full p-2 border rounded-md border-gray-400"
                  />
                </div>
              </div>

              <div>
                <label className="block mb text-sm">Message</label>
                <div className="mt-2">
                  <textarea
                    placeholder="Type your message"
                    {...register("message", { required: true })}
                    className="w-full p-2 border rounded-md border-gray-400"
                  />
                </div>
              </div>

              <Button className="w-full py-3 bg-purple-700 dark:text-white">
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SendMessage;
