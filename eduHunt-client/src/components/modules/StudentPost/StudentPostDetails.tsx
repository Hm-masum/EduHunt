"use client";

import { BlockTitle } from "@/components/shared/BlockTitle";
import { InfoRow } from "@/components/shared/InfoRow";
import { MetricBox } from "@/components/shared/MatricBox";
import { Button } from "@/components/ui/button";
import { useUser } from "@/context/UserContext";
import { createApplyStudentPost } from "@/services/ApplyStudentPost";
import { IStudentPost } from "@/types";
import {
  ArrowLeft,
  ArrowRight,
  Mail,
  Phone,
  User,
  MapPin,
  FileText,
  Banknote,
  BookOpen,
  Users,
  Clock,
  CalendarDays,
  CheckCircle,
  XCircle,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";

const StudentPostDetails = ({ post }: { post: IStudentPost }) => {
  const { user } = useUser();
  const student = post.studentId;

  const handleApply = async () => {
    try {
      if (!user) {
        return toast.error("You are not authorized !");
      }

      const data = {
        studentId: post.studentId._id,
        tuitionId: post._id,
      };

      const res = await createApplyStudentPost(data);
      if (res?.success) {
        toast.success(res.message || "Applied Successfully");
      } else {
        toast.error(res.message || "Something went wrong");
      }
    } catch (err: any) {
      toast.error(err?.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-950 pb-12">
      <div className="relative h-48 bg-gradient-to-r from-purple-900 via-purple-900 to-purple-500">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />
        <Link
          href="/student-posts"
          className="absolute top-4 left-4 flex items-center gap-2 text-white/80 hover:text-white text-sm transition-colors"
        >
          <ArrowLeft size={16} /> Back to Posts
        </Link>
      </div>

      <div className="max-w-4xl mx-auto px-4 space-y-4">
        <div className="relative -mt-20 bg-white dark:bg-zinc-900 rounded-2xl shadow-lg p-6">
          <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-end">
            <div className="relative w-32 h-32 rounded-2xl overflow-hidden border-4 border-white dark:border-zinc-900 shadow-lg shrink-0">
              <Image
                src={student.image || "/default-image.png"}
                fill
                alt={student.name}
                className="object-cover object-top"
                sizes="128px"
              />
            </div>

            <div className="flex-1 text-center sm:text-left">
              <div className="flex flex-wrap justify-center sm:justify-start gap-2 mb-2">
                <span className="bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300 text-xs font-semibold px-3 py-1 rounded-full capitalize">
                  {student.role}
                </span>
                <span className="bg-gray-100 text-gray-600 dark:bg-zinc-800 dark:text-gray-300 text-xs font-semibold px-3 py-1 rounded-full capitalize flex items-center gap-1">
                  <User size={11} /> {student.gender}
                </span>
                {student.isActive !== undefined && (
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1 ${
                      student?.isActive
                        ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                        : "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400"
                    }`}
                  >
                    {student?.isActive ? (
                      <>
                        <CheckCircle size={11} /> Active
                      </>
                    ) : (
                      <>
                        <XCircle size={11} /> Inactive
                      </>
                    )}
                  </span>
                )}
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                {student.name}
              </h1>
              <p className="text-gray-500 dark:text-gray-400 flex items-center justify-center sm:justify-start gap-1 mt-1 text-sm">
                <MapPin size={14} className="text-purple-600" />
                {student.thana}, {student.district}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-sm p-6 space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-widest text-purple-600 dark:text-purple-400">
              Contact Info
            </h2>
            <InfoRow
              icon={<Mail size={15} className="text-purple-600" />}
              label="Email"
              value={student.email}
            />
            <InfoRow
              icon={<Phone size={15} className="text-purple-600" />}
              label="Phone"
              value={student.phone}
            />
          </div>

          <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-sm p-6 space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-widest text-purple-600 dark:text-purple-400">
              Family Info
            </h2>
            <InfoRow
              icon={<User size={15} className="text-purple-600" />}
              label="Father"
              value={student.fatherName}
            />
            <InfoRow
              icon={<User size={15} className="text-purple-600" />}
              label="Mother"
              value={student.motherName}
            />
          </div>
        </div>

        <div className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl p-5">
          <BlockTitle icon={<FileText size={14} />} label="Post overview" />
          <div className="grid grid-cols-2 gap-3 mb-4">
            <MetricBox label="Title" value={post.title} />
            <MetricBox label="Institute" value={post.institute} />
            <MetricBox label="Class" value={post.class} />
            <MetricBox label="Subject" value={post.subject} />
            <MetricBox label="Curriculum" value={post.curriculum} />
            <MetricBox label="Teacher gender" value={post.teacherGender} />
            <MetricBox
              label="Days / week"
              value={post.daysPerWeek ? `${post.daysPerWeek} days` : undefined}
            />
            <MetricBox label="Tutoring time" value={post.tutoringTime} />
            <MetricBox
              label="Students"
              value={
                post.numberOfStudent ? String(post.numberOfStudent) : undefined
              }
            />
            <MetricBox
              label="Location"
              value={`${post.thana}, ${post.district}`}
            />
          </div>
          <div className="flex items-center justify-between bg-purple-50 dark:bg-purple-900/20 rounded-lg px-4 py-3">
            <span className="flex items-center gap-1.5 text-sm text-purple-700 dark:text-purple-400">
              <Banknote size={15} /> Monthly salary
            </span>
            <span className="text-xl font-semibold text-purple-800 dark:text-purple-300">
              ৳ {post.salary}
            </span>
          </div>
        </div>

        <Button
          onClick={handleApply}
          className="w-full bg-purple-700 hover:bg-purple-800 text-white h-11 text-sm gap-2"
        >
          Apply now <ArrowRight size={15} />
        </Button>
      </div>
    </div>
  );
};

export default StudentPostDetails;
