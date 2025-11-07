"use server";

import { getValidToken } from "@/lib/verifyToken";
import { revalidateTag } from "next/cache";

export const createApplyTutorPost = async (data: Record<string, unknown>) => {
  try {
    const token = await getValidToken();
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/apply-tutor-post`,
      {
        method: "POST",
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    revalidateTag("apply-tutor-posts");

    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};

export const getAllApplyTutorPost = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/apply-tutor-post`,
      {
        next: {
          tags: ["apply-tutor-posts"],
        },
      }
    );
    const result = res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};

export const myApplicationInfoOfTutorPost = async () => {
  try {
    const token = await getValidToken();
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/apply-tutor-post/student`,
      {
        method: "GET",
        headers: {
          Authorization: token,
        },
        next: {
          tags: ["apply-tutor-posts"],
        },
      }
    );
    const result = res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};

export const applicantInfoOfTutorPost = async () => {
  try {
    const token = await getValidToken();
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/apply-tutor-post/tutor`,
      {
        headers: {
          Authorization: token,
        },
        next: {
          tags: ["apply-tutor-posts"],
        },
      }
    );
    const result = res.json();

    return result;
  } catch (error: any) {
    return Error(error);
  }
};

export const updateApplyTutorPost = async (
  updatedData: Record<string, unknown>,
  applicationId: string
) => {
  try {
    const token = await getValidToken();
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/apply-tutor-post/${applicationId}`,
      {
        method: "PATCH",
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      }
    );
    revalidateTag("apply-tutor-posts");
    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};

export const DeleteApplyTutorPost = async (
  applicationId: string
): Promise<any> => {
  try {
    const token = await getValidToken();
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/apply-tutor-post/${applicationId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: token,
        },
      }
    );
    revalidateTag("apply-tutor-posts");
    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};
