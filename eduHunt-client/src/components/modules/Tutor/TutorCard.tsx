import { Button } from "@/components/ui/button";
import { ITutor } from "@/types";
import { MapIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const TutorCard = ({ tutor }: { tutor: ITutor }) => {
  return (
    <div className="w-full bg-white dark:bg-black shadow-sm border border-gray-400 hover:border-purple-800 rounded-lg overflow-hidden">
      <figure>
        <Image
          src={tutor.image || "/default-image.png"}
          width={600}
          height={100}
          alt="blog image"
          className="rounded-t-lg h-64 object-cover"
        />
      </figure>
      <div className="p-5 text-center space-y-2">
        <h2 className="text-xl md:text-2xl font-semibold">{tutor.name}</h2>
        <h2 className="flex justify-center gap-2">
          <MapIcon />
          {tutor.thana}, {tutor.district}
        </h2>
        <Link href={`tutors/${tutor._id}`}>
          <Button className="bg-purple-700 w-full text-white">
            Details Bio
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default TutorCard;
