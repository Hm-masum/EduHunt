import SectionTitle from "@/components/shared/SectionTitle";

const GetStarted = () => {
  return (
    <div className="py-12">
      <SectionTitle
        title=" Get Started in 3 Easy"
        subtitle="Start your learning journey with us quickly and easily."
        colorWord="Steps"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 py-5">
        <div className="text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-purple-600 rounded-full text-purple-600 text-2xl font-bold">
            1
          </div>
          <h3 className="mt-6 text-xl font-semibold">Search for a Tutor</h3>
          <p className="mt-2 text-gray-600">
            Browse our extensive list of tutors by subject, grade, or location.
          </p>
        </div>

        <div className="text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-purple-600 rounded-full text-purple-600 text-2xl font-bold">
            2
          </div>
          <h3 className="mt-6 text-xl font-semibold">Connect & Schedule</h3>
          <p className="mt-2 text-gray-600">
            Chat with tutors, discuss your needs, and book your first session.
          </p>
        </div>

        <div className="text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-purple-600 rounded-full text-purple-600 text-2xl font-bold">
            3
          </div>
          <h3 className="mt-6 text-xl font-semibold">Start Learning</h3>
          <p className="mt-2 text-gray-600">
            Join your session online and start improving your skills and grades!
          </p>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
