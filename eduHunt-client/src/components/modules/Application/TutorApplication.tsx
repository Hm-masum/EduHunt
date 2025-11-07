"use client";

import { Button } from "@/components/ui/button";
import DeleteConfirmationModal from "@/components/ui/core/TLModal/DeleteConfirmationModal";
import { TLTable } from "@/components/ui/core/TLTable";
import { DeleteApplyStudentPost } from "@/services/ApplyStudentPost";
import { IApplyStudentPost } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

const TutorApplication = ({
  applicationData,
}: {
  applicationData: IApplyStudentPost[];
}) => {
  const router = useRouter();
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleDelete = (data: IApplyStudentPost) => {
    setSelectedId(data?._id);
    setSelectedItem("application");
    setModalOpen(true);
  };

  const handleDeleteConfirm = async () => {
    try {
      if (selectedId) {
        const res = await DeleteApplyStudentPost(selectedId);
        if (res.success) {
          toast.success(res.message);
          setModalOpen(false);
        } else {
          toast.error(res.message);
        }
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
      accessorKey: "tuitionId?.salary",
      header: "Salary",
      cell: ({ row }) => <span>{row.original.tuitionId?.salary}</span>,
    },
    {
      accessorKey: "selectStatus",
      header: "SelectStatus",
      cell: ({ row }) => (
        <p className="py-2 px-3 text-center font-semibold rounded-xl uppercase text-purple-600">
          {row.original?.selectStatus}
        </p>
      ),
    },
    {
      accessorKey: "paymentStatus",
      header: "Payment Status",
      cell: ({ row }) => (
        <p className="py-2 px-3 text-center font-semibold rounded-xl  text-purple-600">
          {row.original.paymentStatus === true ? "Yes" : "NO"}
        </p>
      ),
    },
    {
      accessorKey: "action1",
      header: "Details",
      cell: ({ row }) => (
        <Button
          className="bg-purple-700"
          onClick={() =>
            router.push(`/student-posts/${row.original.tuitionId?._id}`)
          }
        >
          Details
        </Button>
      ),
    },
    {
      accessorKey: "action2",
      header: "Delete",
      cell: ({ row }) => (
        <Button
          className="bg-purple-700"
          onClick={() => handleDelete(row.original)}
        >
          Delete
        </Button>
      ),
    },
  ];

  return (
    <div>
      <TLTable columns={columns} data={applicationData || []} />

      <DeleteConfirmationModal
        name={selectedItem}
        isOpen={isModalOpen}
        onOpenChange={setModalOpen}
        onConfirm={handleDeleteConfirm}
      />
    </div>
  );
};

export default TutorApplication;
