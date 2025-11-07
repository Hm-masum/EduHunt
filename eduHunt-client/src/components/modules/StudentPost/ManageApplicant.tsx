"use client";

import { Button } from "@/components/ui/button";
import { TLTable } from "@/components/ui/core/TLTable";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { updateApplyStudentPost } from "@/services/ApplyStudentPost";
import { IApplyStudentPost } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import { toast } from "sonner";

const ManageTutorApplicant = ({ posts }: { posts: IApplyStudentPost[] }) => {
  const handleSelection = async (id: string, value: string) => {
    try {
      const payload = {
        selectStatus: value,
      };
      const res = await updateApplyStudentPost(payload, id);

      if (res?.success) {
        toast.success("Post updated successfully!");
      } else {
        toast.error("Something is wrong!");
      }
    } catch (err: any) {
      toast.error(err?.message);
    }
  };

  const columns: ColumnDef<IApplyStudentPost>[] = [
    {
      accessorKey: "tuitionId._id",
      header: "Tuition Id",
      cell: ({ row }) => <span>{row.original.tuitionId?._id}</span>,
    },
    {
      accessorKey: "tutorId.name",
      header: "TutorName",
      cell: ({ row }) => <span>{row.original.tutorId?.name}</span>,
    },
    {
      accessorKey: "tutorId.phone",
      header: "TutorMobile",
      cell: ({ row }) => <span>{row.original.tutorId?.phone}</span>,
    },
    {
      accessorKey: "tuitionId?.salary",
      header: "Salary",
      cell: ({ row }) => <span>{row.original.tuitionId?.salary}</span>,
    },
    {
      accessorKey: "action",
      header: "TutorProfile",
      cell: ({ row }) => (
        <Link href={`/tutors/${row.original.tutorId._id}`}>
          <Button className="bg-purple-700">See Tutor</Button>
        </Link>
      ),
    },
    {
      accessorKey: "selectStatus",
      header: "Selection Status",
      cell: ({ row }) => {
        const status = row?.original?.selectStatus;
        return (
          <p>
            <Select
              value={status}
              onValueChange={(value) =>
                handleSelection(row.original._id, value)
              }
            >
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="yes">Yes</SelectItem>
                <SelectItem value="no">No</SelectItem>
              </SelectContent>
            </Select>
          </p>
        );
      },
    },
    {
      accessorKey: "paymentStatus",
      header: "Payment Status",
      cell: ({ row }) => (
        <p className="py-2 px-3 text-center font-semibold rounded-xl text-purple-600">
          {row.original.paymentStatus === true ? "Yes" : "NO"}
        </p>
      ),
    },
  ];

  return (
    <div>
      <TLTable columns={columns} data={posts || []} />
    </div>
  );
};

export default ManageTutorApplicant;
