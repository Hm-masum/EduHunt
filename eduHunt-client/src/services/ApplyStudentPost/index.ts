"use server";

import { getValidToken } from "@/lib/verifyToken";
import { revalidateTag } from "next/cache";

export const createApplyStudentPost = async (data: Record<string, unknown>) => {
  try {
    const token = await getValidToken();
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/apply-student-post`,
      {
        method: "POST",
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    revalidateTag("apply-student-posts");

    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};

export const getAllApplyStudentPost = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/apply-student-post`,
      {
        next: {
          tags: ["apply-student-posts"],
        },
      }
    );
    const result = res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};

export const applicantInfoOfStudentPost = async () => {
  try {
    const token = await getValidToken();
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/apply-student-post/student`,
      {
        headers: {
          Authorization: token,
        },
        next: {
          tags: ["apply-student-posts"],
        },
      }
    );
    const result = res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};

export const myApplicationInfoOfStudentPost = async () => {
  try {
    const token = await getValidToken();
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/apply-student-post/tutor`,
      {
        headers: {
          Authorization: token,
        },
        next: {
          tags: ["apply-student-posts"],
        },
      }
    );
    const result = res.json();

    return result;
  } catch (error: any) {
    return Error(error);
  }
};

export const updateApplyStudentPost = async (
  updatedData: Record<string, unknown>,
  applicationId: string
) => {
  try {
    const token = await getValidToken();
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/apply-student-post/${applicationId}`,
      {
        method: "PATCH",
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      }
    );
    revalidateTag("apply-student-posts");
    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};

export const DeleteApplyStudentPost = async (
  applicationId: string
): Promise<any> => {
  try {
    const token = await getValidToken();
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/apply-student-post/${applicationId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: token,
        },
      }
    );
    revalidateTag("apply-student-posts");
    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};
