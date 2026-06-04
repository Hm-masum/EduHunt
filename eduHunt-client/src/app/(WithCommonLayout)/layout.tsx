import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { ReactNode } from "react";

const CommonLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-gray-50 dark:bg-black">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default CommonLayout;
