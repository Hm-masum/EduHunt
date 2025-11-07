"use server";

import { getValidToken } from "@/lib/verifyToken";
import { revalidateTag } from "next/cache";

export const createTutorPost = async (data: Record<string, unknown>) => {
  try {
    const token = await getValidToken();
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/tutor-posts`, {
      method: "POST",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    revalidateTag("tutor-posts");

    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};

export const getAllTutorPosts = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/tutor-posts`, {
      next: {
        tags: ["tutor-posts"],
      },
    });
    const result = res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};

export const getMyTutorPosts = async () => {
  try {
    const token = await getValidToken();
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/tutor-posts`, {
      headers: {
        Authorization: token,
      },
      next: {
        tags: ["tutor-posts"],
      },
    });
    const result = res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};

export const getSingleTutorPost = async (postId: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/tutor-posts/${postId}`,
      {
        next: {
          tags: ["tutor-posts"],
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (error: any) {
    return Error(error.message);
  }
};

export const updateTutorPost = async (
  postData: Record<string, unknown>,
  postId: string
) => {
  try {
    const token = await getValidToken();
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/tutor-posts/${postId}`,
      {
        method: "PATCH",
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      }
    );
    revalidateTag("tutor-posts");
    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};

export const DeleteTutorPost = async (postId: string): Promise<any> => {
  try {
    const token = await getValidToken();
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/tutor-posts/${postId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: token,
        },
      }
    );
    revalidateTag("tutor-posts");
    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};
