"use client";

import { Button } from "@/components/ui/button";
import DeleteConfirmationModal from "@/components/ui/core/TLModal/DeleteConfirmationModal";
import { TLTable } from "@/components/ui/core/TLTable";
import { DeleteTutorPost } from "@/services/TutorPost";
import { ITutorPost } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { Edit, Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

const ManageTutorPosts = ({ posts }: { posts: ITutorPost[] }) => {
  const router = useRouter();
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleDelete = (data: ITutorPost) => {
    setSelectedId(data?._id);
    setSelectedItem(data?.title);
    setModalOpen(true);
  };

  const handleDeleteConfirm = async () => {
    try {
      if (selectedId) {
        const res = await DeleteTutorPost(selectedId);
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

  const columns: ColumnDef<ITutorPost>[] = [
    {
      accessorKey: "title",
      header: "Title",
      cell: ({ row }) => <span>{row.original.title}</span>,
    },
    {
      accessorKey: "tutoringTime",
      header: "Tutoring Time",
      cell: ({ row }) => <span>{row.original.tutoringTime}</span>,
    },
    {
      accessorKey: "subject",
      header: "Subject",
      cell: ({ row }) => <span>{row.original.subject}</span>,
    },
    {
      accessorKey: "curriculum",
      header: "Curriculum",
      cell: ({ row }) => <span>{row.original.curriculum}</span>,
    },
    {
      accessorKey: "salary",
      header: "Salary",
      cell: ({ row }) => <span>{row.original.salary}</span>,
    },
    {
      accessorKey: "action",
      header: "Details",
      cell: ({ row }) => (
        <Button
          className="bg-purple-700"
          onClick={() => router.push(`/tutor-posts/${row.original._id}`)}
        >
          Details
        </Button>
      ),
    },
    {
      accessorKey: "action1",
      header: "Update",
      cell: ({ row }) => (
        <Button
          className="bg-purple-700"
          onClick={() => router.push(`/tutor/update-post/${row.original._id}`)}
        >
          <Edit className="w-5 h-5" />
        </Button>
      ),
    },
    {
      accessorKey: "action2",
      header: () => <div>Action</div>,
      cell: ({ row }) => (
        <button
          className="text-red-500"
          title="Delete"
          onClick={() => handleDelete(row.original)}
        >
          <Trash className="w-5 h-5" />
        </button>
      ),
    },
  ];

  return (
    <div>
      <TLTable columns={columns} data={posts || []} />

      <DeleteConfirmationModal
        name={selectedItem}
        isOpen={isModalOpen}
        onOpenChange={setModalOpen}
        onConfirm={handleDeleteConfirm}
      />
    </div>
  );
};

export default ManageTutorPosts;
