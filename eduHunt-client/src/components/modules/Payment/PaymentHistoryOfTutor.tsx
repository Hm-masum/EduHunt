"use client";

import DeleteConfirmationModal from "@/components/ui/core/TLModal/DeleteConfirmationModal";
import { TLTable } from "@/components/ui/core/TLTable";
import { DeletePayment } from "@/services/Payment";
import { IPayment } from "@/types/payment";
import { ColumnDef } from "@tanstack/react-table";
import { Trash } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const PaymentHistoryOfTutor = ({
  paymentData,
}: {
  paymentData: IPayment[];
}) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleDelete = (data: IPayment) => {
    setSelectedId(data?._id);
    setSelectedItem(data?._id);
    setModalOpen(true);
  };

  const handleDeleteConfirm = async () => {
    try {
      if (selectedId) {
        const res = await DeletePayment(selectedId);
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

  const columns: ColumnDef<IPayment>[] = [
    {
      accessorKey: "applicationId",
      header: "ApplicationId",
      cell: ({ row }) => <span>{row.original?.applicationId || "N/A"}</span>,
    },
    {
      accessorKey: "transactionId",
      header: "TransactionId",
      cell: ({ row }) => <span>{row.original.transaction?.id || "N/A"}</span>,
    },
    {
      accessorKey: "studentName",
      header: "StudentName",
      cell: ({ row }) => <span>{row.original.studentId.name || "N/A"}</span>,
    },
    {
      accessorKey: "studentMobile",
      header: "StudentMobile",
      cell: ({ row }) => <span>{row.original.studentId.phone || "N/A"}</span>,
    },
    {
      accessorKey: "salary",
      header: "Salary",
      cell: ({ row }) => <span>{row.original.salary || "N/A"}</span>,
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => <span>{row.original?.status}</span>,
    },
    {
      accessorKey: "action",
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
      <TLTable columns={columns} data={paymentData || []} />

      <DeleteConfirmationModal
        name={selectedItem}
        isOpen={isModalOpen}
        onOpenChange={setModalOpen}
        onConfirm={handleDeleteConfirm}
      />
    </div>
  );
};

export default PaymentHistoryOfTutor;
