import { BlockTitle } from "@/components/shared/BlockTitle";
import { EduCard } from "@/components/shared/EduCard";
import { InfoRow } from "@/components/shared/InfoRow";
import { ITutor } from "@/types";
import {
  MapPin, Phone, Mail, User, GraduationCap,
  BookOpen, Award, CheckCircle, XCircle, ArrowLeft
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const TutorDetailsPage = ({ tutor }: { tutor: ITutor }) => {
  const edu = tutor?.education;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-950 pb-12">
       {/* hero section */}
      <div className="relative h-48 bg-gradient-to-r from-purple-900 via-purple-900 to-purple-500">
        <div className="absolute inset-0 opacity-20"
          style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "24px 24px" }}
        />
        <Link href="/tutors"
          className="absolute top-4 left-4 flex items-center gap-2 text-white/80 hover:text-white text-sm transition-colors">
          <ArrowLeft size={16} /> Back to Tutors
        </Link>
      </div>

      <div className="max-w-4xl mx-auto px-4 space-y-4">
        {/* Tutor Info */}
        <div className="relative -mt-20 bg-white dark:bg-zinc-900 rounded-2xl shadow-lg p-6">
          <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-end">
            <div className="relative w-32 h-32 rounded-2xl overflow-hidden border-4 border-white dark:border-zinc-900 shadow-lg shrink-0">
              <Image
                src={tutor.image || "/default-image.png"}
                fill
                alt={tutor.name}
                className="object-cover object-top"
                sizes="128px"
              />
            </div>

            <div className="flex-1 text-center sm:text-left">
              <div className="flex flex-wrap justify-center sm:justify-start gap-2 mb-2">
                <span className="bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300 text-xs font-semibold px-3 py-1 rounded-full capitalize">
                  {tutor.role}
                </span>
                <span className="bg-gray-100 text-gray-600 dark:bg-zinc-800 dark:text-gray-300 text-xs font-semibold px-3 py-1 rounded-full capitalize flex items-center gap-1">
                  <User size={11} /> {tutor.gender}
                </span>
                {tutor.isActive !== undefined && (
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1 ${
                    tutor?.isActive
                      ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                      : "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400"
                  }`}>
                    {tutor?.isActive
                      ? <><CheckCircle size={11} /> Active</>
                      : <><XCircle size={11} /> Inactive</>}
                  </span>
                )}
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                {tutor.name}
              </h1>
              <p className="text-gray-500 dark:text-gray-400 flex items-center justify-center sm:justify-start gap-1 mt-1 text-sm">
                <MapPin size={14} className="text-purple-600" />
                {tutor.thana}, {tutor.district}
              </p>
            </div>
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">

          <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-sm p-6 space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-widest text-purple-600 dark:text-purple-400">
              Contact Info
            </h2>
            <InfoRow icon={<Mail size={15} className="text-purple-600" />} label="Email" value={tutor.email} />
            <InfoRow icon={<Phone size={15} className="text-purple-600" />} label="Phone" value={tutor.phone} />
          </div>


          <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-sm p-6 space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-widest text-purple-600 dark:text-purple-400">
              Family Info
            </h2>
            <InfoRow icon={<User size={15} className="text-purple-600" />} label="Father" value={tutor.fatherName} />
            <InfoRow icon={<User size={15} className="text-purple-600" />} label="Mother" value={tutor.motherName} />
          </div>
        </div>

        {/* Education Section */}
        {edu && (
          <div className="mt-4 bg-white dark:bg-zinc-900 rounded-2xl shadow-sm p-6">
            <BlockTitle icon={<GraduationCap size={14} />} label="Education" />

            <div className="space-y-5">
              {(edu?.graduationInstitute || edu?.graduationSubject) && (
                <EduCard
                  level="Graduation"
                  icon={<Award size={16} className="text-purple-600" />}
                  rows={[
                    { label: "Curriculum", value: edu?.graduationCurriculum },
                    { label: "Institute", value: edu?.graduationInstitute },
                    { label: "Subject", value: edu?.graduationSubject },
                    { label: "Passing Year", value: edu?.graduationPassingYear },
                    { label: "Result", value: edu?.graduationResult },
                  ]}
                />
              )}

              {(edu?.higherSecondaryInstitute || edu?.higherSecondaryGroup) && (
                <EduCard
                  level="Higher Secondary (HSC)"
                  icon={<BookOpen size={16} className="text-purple-600" />}
                  rows={[
                    { label: "Curriculum", value: edu?.higherSecondaryCurriculum },
                    { label: "Group", value: edu?.higherSecondaryGroup },
                    { label: "Institute", value: edu?.higherSecondaryInstitute },
                    { label: "Passing Year", value: edu?.higherSecondaryPassingYear },
                    { label: "Result", value: edu?.higherSecondaryResult },
                  ]}
                />
              )}

              {(edu?.secondaryInstitute || edu?.secondaryGroup) && (
                <EduCard
                  level="Secondary (SSC)"
                  icon={<BookOpen size={16} className="text-purple-600" />}
                  rows={[
                    { label: "Curriculum", value: edu?.secondaryCurriculum },
                    { label: "Group", value: edu?.secondaryGroup },
                    { label: "Institute", value: edu?.secondaryInstitute },
                    { label: "Passing Year", value: edu?.secondaryPassingYear },
                    { label: "Result", value: edu?.secondaryResult },
                  ]}
                />
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TutorDetailsPage;