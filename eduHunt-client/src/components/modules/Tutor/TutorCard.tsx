import { Button } from "@/components/ui/button";
import { ITutor } from "@/types";
import {
  MapIcon,
  Phone,
  Mail,
  GraduationCap,
  User,
  Locate,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const TutorCard = ({ tutor }: { tutor: ITutor }) => {
  return (
    <div className="w-full bg-white dark:bg-black shadow-sm border border-gray-400 hover:border-purple-800 rounded-lg overflow-hidden transition-colors duration-200">
      <figure className="relative w-full h-64 overflow-hidden">
        <Image
          src={tutor.image || "/default-image.png"}
          fill
          alt="tutor image"
          className="object-cover object-center rounded-t-lg"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        <span className="absolute top-3 left-3 bg-purple-700 text-white text-xs font-medium px-2.5 py-1 rounded-full capitalize flex items-center gap-1">
          <User size={12} className=" font-semibold" /> {tutor.gender}
        </span>
      </figure>

      <div className="p-4 text-center space-y-2">
        <h2 className="text-xl md:text-2xl font-semibold">{tutor.name}</h2>

        <div className="flex flex-col items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400">
          <p className="flex items-center gap-1.5">
            <MapIcon size={14} className="text-purple-700" />
            {tutor.thana}, {tutor.district}
          </p>
          <span className="flex items-center gap-1.5">
            <Mail size={14} className="text-purple-700" />
            {tutor.email}
          </span>
          <span className="flex items-center gap-1.5">
            <Phone size={14} className="text-purple-700" />
            {tutor.phone}
          </span>
        </div>

        <Link href={`tutors/${tutor._id}`}>
          <Button className="bg-purple-700 hover:bg-purple-800 w-full text-white">
            <GraduationCap size={16} className="mr-2" />
            Details Bio
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default TutorCard;
