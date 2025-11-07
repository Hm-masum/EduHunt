"use client";

import { TLTable } from "@/components/ui/core/TLTable";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { updateApplyTutorPost } from "@/services/ApplyTutorPost";
import { IApplyTutorPost } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { toast } from "sonner";

const ManageStudentApplicant = ({ posts }: { posts: IApplyTutorPost[] }) => {
  const handleSelection = async (id: string, value: string) => {
    try {
      const payload = {
        selectStatus: value,
      };
      const res = await updateApplyTutorPost(payload, id);

      if (res?.success) {
        toast.success("Post updated successfully!");
      } else {
        toast.error("Something is wrong!");
      }
    } catch (err: any) {
      toast.error(err?.message);
    }
  };

  const columns: ColumnDef<IApplyTutorPost>[] = [
    {
      accessorKey: "tuitionId._id",
      header: "Tuition Id",
      cell: ({ row }) => <span>{row.original.tuitionId?._id}</span>,
    },
    {
      accessorKey: "studentId.name",
      header: "StudentName",
      cell: ({ row }) => <span>{row.original.studentId?.name}</span>,
    },
    {
      accessorKey: "studentId.phone",
      header: "StudentMobile",
      cell: ({ row }) => <span>{row.original.studentId?.phone}</span>,
    },
    {
      accessorKey: "tuitionId?.tutoringTime",
      header: "TutoringTime",
      cell: ({ row }) => <span>{row.original.tuitionId?.tutoringTime}</span>,
    },
    {
      accessorKey: "tuitionId?.salary",
      header: "Salary",
      cell: ({ row }) => <span>{row.original.tuitionId?.salary}</span>,
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

export default ManageStudentApplicant;
