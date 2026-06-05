import { Pill } from "@/components/shared/Pill";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { IStudentPost } from "@/types";
import { MapPin, BookOpen, GraduationCap, ArrowRight, Banknote, User, UserCheck } from "lucide-react";
import Link from "next/link";

const StudentPostCard = ({ posts }: { posts: IStudentPost }) => {
  return (
    <div className="w-full bg-white dark:bg-zinc-900 border border-gray-300 dark:border-zinc-800 hover:border-purple-600 dark:hover:border-purple-500 rounded-xl overflow-hidden transition-colors duration-200">


      <div className="p-4 pb-0 flex items-start justify-between gap-3">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white leading-snug">
          {posts.title}
        </h2>
        <span className="shrink-0 text-xs font-medium bg-purple-100 dark:bg-purple-900/40 text-purple-800 dark:text-purple-300 px-2.5 py-1 rounded-full">
          Curriculum : {posts.curriculum}
        </span>
      </div>

      <div className="mx-4 my-3 h-px bg-gray-100 dark:bg-zinc-800" />

      <div className="px-4 flex flex-wrap gap-2">
        <Pill icon={<GraduationCap size={12} />} text={`Class: ${posts.class}`} />
        <Pill icon={<BookOpen size={12} />} text={posts.subject} />
        <Pill icon={<MapPin size={12} />} text={`${posts.thana}, ${posts.district}`} />
        <Pill icon={<User size={12} />} text={`Student: ${posts.studentGender}`} />
        <Pill icon={<UserCheck size={12} />} text={`Teacher Required: ${posts.teacherGender}`} />
      </div>


      <div className="mx-4 mt-3 flex items-center justify-between bg-gray-50 dark:bg-zinc-800 rounded-lg px-4 py-2.5">
        <span className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
          <Banknote size={14} className="text-purple-600" />
          Monthly salary
        </span>
        <span className="text-base font-semibold text-purple-800 dark:text-purple-300">
          ৳ {posts.salary}
        </span>
      </div>

      <div className="mx-4 my-3 h-px bg-gray-200 dark:bg-zinc-800" />

      <div className="px-4 pb-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 min-w-0">
          <Avatar className="h-7 w-7 shrink-0">
            <AvatarImage src={posts?.studentId?.image || "https://github.com/shadcn.png"} />
            <AvatarFallback className="text-xs bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300">
              ST
            </AvatarFallback>
          </Avatar>
          <span className="text-xs text-gray-500 dark:text-gray-400 truncate">
            {posts.studentId.email}
          </span>
        </div>

        <Link href={`/student-posts/${posts._id}`} className="shrink-0">
          <Button
            size="sm"
            className="bg-purple-700 hover:bg-purple-800 text-white text-xs h-8 px-3 gap-1.5"
          >
            Details <ArrowRight size={13} />
          </Button>
        </Link>
      </div>

    </div>
  );
};

export default StudentPostCard;