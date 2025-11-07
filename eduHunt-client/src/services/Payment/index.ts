"use server";

import { getValidToken } from "@/lib/verifyToken";
import { revalidateTag } from "next/cache";

export const createPayment = async (data: Record<string, unknown>) => {
  const token = await getValidToken();
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/payment/create-payment`,
      {
        method: "POST",
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    revalidateTag("Payment");

    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};

export const verifyPayment = async (id: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/payment/verify?order_id=${id}`
    );

    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};

export const getAllPayment = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/payment/all-payment`,
      {
        next: {
          tags: ["Payment"],
        },
      }
    );
    const result = res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};

export const getPaymentHistoryOfStudent = async () => {
  try {
    const token = await getValidToken();
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/payment/payment-history-student`,
      {
        headers: {
          Authorization: token,
        },
        next: {
          tags: ["Payment"],
        },
      }
    );
    const result = res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};

export const getPaymentHistoryOfTutor = async () => {
  try {
    const token = await getValidToken();
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/payment/payment-history-tutor`,
      {
        headers: {
          Authorization: token,
        },
        next: {
          tags: ["Payment"],
        },
      }
    );
    const result = res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};

export const DeletePayment = async (paymentId: string): Promise<any> => {
  try {
    const token = await getValidToken();
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/payment/${paymentId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: token,
        },
      }
    );
    revalidateTag("Payment");
    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};
