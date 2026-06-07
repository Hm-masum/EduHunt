"use client";

import Image from "next/image";
import logo from "../../../assets/logo.png";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import StudentRegisterForm from "./StudentRegiterForm";
import TutorRegisterForm from "./TutorRegisterForm";
import AdminRegisterForm from "./AdminRegisterForm";

const RegisterForm = () => {
  return (
    <div className="border shadow border-gray-300 rounded-xl flex-grow w-full p-5 bg-white dark:bg-gray-800">
      <div className="flex items-center space-x-4 my-5">
        <Image width={50} height={50} src={logo} alt="" />
        <div>
          <h1 className="text-xl font-semibold">Register</h1>
          <p className="font-extralight text-sm text-gray-600 dark:text-white">
            Join us today and start your journey!
          </p>
        </div>
      </div>
      
      <Tabs defaultValue="student" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="student">Student</TabsTrigger>
          <TabsTrigger value="tutor">Tutor</TabsTrigger>
          {/* <TabsTrigger value="admin">Admin</TabsTrigger> */}
        </TabsList>

        {/* Student Form */}
        <TabsContent value="student">
          <StudentRegisterForm/>
        </TabsContent>

        {/* Tutor Form */}
        <TabsContent value="tutor">
          <TutorRegisterForm/>
        </TabsContent>

        {/* Admin Form */}
        {/* <TabsContent value="admin">
          <AdminRegisterForm/>
        </TabsContent> */}
      </Tabs>

     <p className="text-sm text-gray-600 dark:text-white text-center my-3">
        Already have an account ?{" "}
        <Link href="/login" className="text-purple-600 font-semibold">
          Login
        </Link>
      </p>
    </div>
  );
};

export default RegisterForm;
