"use server";

import { getValidToken } from "@/lib/verifyToken";
import { revalidateTag } from "next/cache";

export const getAllAdmins = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/admins`, {
      next: {
        tags: ["Admins"],
      },
    });
    const result = res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};

export const getSingleAdmin = async (adminId: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/admins/${adminId}`,
      {
        next: {
          tags: ["Admins"],
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (error: any) {
    return Error(error.message);
  }
};

export const updateAdmin = async (
  adminData: Record<string, unknown>,
  adminId: string
) => {
  try {
    const token = await getValidToken();
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/admins/${adminId}`,
      {
        method: "PATCH",
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(adminData),
      }
    );
    revalidateTag("Admins");
    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};

export const deleteAdmin = async (adminId: string): Promise<any> => {
  try {
    const token = await getValidToken();
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/admins/${adminId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: token,
        },
      }
    );
    revalidateTag("Admins");
    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};
