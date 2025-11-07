import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { IStudentPost } from "@/types";
import Link from "next/link";

const StudentPostCard = ({ posts }: { posts: IStudentPost }) => {
  return (
    <div className="p-4 md:p-8 border border-gray-400 bg-white dark:bg-black shadow-sm hover:border-purple-800 rounded-lg overflow-hidden space-y-2 w-full">
      <h2 className="text-2xl font-semibold">{posts.title}</h2>

      <div className="flex items-center text-xs md:text-base">
        <p className="w-[50%]">Class : {posts.class}</p>
        <p>Curriculum : {posts.curriculum}</p>
      </div>

      <div className="flex items-center text-xs md:text-base">
        <p className="w-[50%]">Thana : {posts.thana}</p>
        <p>District : {posts.district}</p>
      </div>

      <div className="flex items-center text-xs md:text-base">
        <h3 className="w-[50%]">Subject : {posts.subject}</h3>
        <h3>Salary : {posts.salary} Tk/Month</h3>
      </div>

      <div className="flex items-center border-b border-t py-2 text-xs md:text-base">
        <div className="md:flex items-center gap-4 w-[50%]">
          <Avatar className="h-10 w-10">
            <AvatarImage
              className="rounded-full"
              src={posts?.studentId?.image || "https://github.com/shadcn.png"}
            />
            <AvatarFallback>Tutor</AvatarFallback>
          </Avatar>
          <p>{posts.studentId.email}</p>
        </div>
        <Link href={`/student-posts/${posts._id}`}>
          <Button className="bg-purple-700">Details</Button>
        </Link>
      </div>
    </div>
  );
};

export default StudentPostCard;
