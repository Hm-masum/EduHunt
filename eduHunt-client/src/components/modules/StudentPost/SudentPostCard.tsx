import { Pill } from "@/components/shared/Pill";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { IStudentPost } from "@/types";
import { MapPin, BookOpen, GraduationCap, ArrowRight, BanknoteIcon } from "lucide-react";
import Link from "next/link";

const StudentPostCard = ({ posts }: { posts: IStudentPost }) => {
  return (
    <div className="w-full bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 hover:border-purple-600 dark:hover:border-purple-500 rounded-xl overflow-hidden transition-colors duration-200 flex">

      {/* Left accent bar */}
      <div className="w-1 shrink-0 bg-purple-700" />
      <div className="flex-1 p-5 space-y-4 min-w-0">
        {/* Title + Curriculum */}
        <div className="flex items-start justify-between gap-3">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white leading-snug">
            {posts.title}
          </h2>
          <span className="shrink-0 text-xs font-semibold bg-purple-700 text-white px-2.5 py-1 rounded-full">
            {posts.curriculum}
          </span>
        </div>

        {/* Pill tags */}
        <div className="flex flex-wrap gap-2">
          <Pill icon={<GraduationCap size={12} />} text={`Class :${posts.class}`} />
          <Pill icon={<BookOpen size={12} />} text={posts.subject} />
          <Pill icon={<MapPin size={12} />} text={`${posts.thana}, ${posts.district}`} />
        </div>

        {/* Salary */}
        <div>
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold bg-purple-50 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 px-3 py-1.5 rounded-full">
            Salary: {posts.salary} / month
          </span>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-gray-100 dark:border-zinc-800 pt-3 gap-3">
          <div className="flex items-center gap-2 min-w-0">
            <Avatar className="h-7 w-7 shrink-0">
              <AvatarImage src={posts?.studentId?.image || "https://github.com/shadcn.png"} />
              <AvatarFallback className="text-xs bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300">
                ST
              </AvatarFallback>
            </Avatar>
            <span className="text-sm text-gray-600 dark:text-gray-400 truncate">
              {posts.studentId.email}
            </span>
          </div>

          <Link href={`/student-posts/${posts._id}`} className="shrink-0">
            <Button
              size="sm"
              className="bg-purple-700 hover:bg-purple-800 text-white text-xs h-8 px-3 gap-1"
            >
              Details <ArrowRight size={13} />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};


export default StudentPostCard;