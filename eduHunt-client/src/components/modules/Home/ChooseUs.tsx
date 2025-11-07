import SectionTitle from "@/components/shared/SectionTitle";
import React from "react";

const ChooseUS = () => {
  return (
    <div className="my-12">
      <SectionTitle
        title="Why Choose Tuition"
        subtitle="Everything you need for a successful learning journey."
        colorWord="Media?"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="p-6">
          <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Verified Tutors</h3>
          <p className="text-gray-600">
            Our tutors undergo a rigorous vetting process to ensure quality and
            safety.
          </p>
        </div>

        <div className="p-6">
          <div className="bg-green-100 text-green-600 w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="14" x="2" y="5" rx="2" />
              <line x1="2" x2="22" y1="10" y2="10" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Flexible Learning</h3>
          <p className="text-gray-600">
            Learn at your own pace and schedule sessions that fit your life.
          </p>
        </div>

        <div className="p-6">
          <div className="bg-purple-100 text-purple-600 w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Personalized Sessions</h3>
          <p className="text-gray-600">
            Get one-on-one attention tailored to your specific learning needs
            and goals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChooseUS;
