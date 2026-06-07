"use server";

import { getValidToken } from "@/lib/verifyToken";
import { revalidateTag } from "next/cache";

export const createStudentPost = async (data: Record<string, unknown>) => {
  try {
    const token = await getValidToken();
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/student-posts`,
      {
        method: "POST",
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      },
    );
    revalidateTag("student-posts");

    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};

export const getAllStudentPosts = async (
  searchText?: string,
  className?: string,
  carriculam?: string,
  teacherGender?: string,
  studentGender?: string,
  page?: string | number,
  limit?: string | number,
) => {
  try {
    const url = new URL(`${process.env.NEXT_PUBLIC_BASE_API}/student-posts`);

    if (searchText) {
      url.searchParams.append("searchText", searchText);
    }
    if (className) {
      url.searchParams.append("class", className);
    }
    if (carriculam) {
      url.searchParams.append("carriculam", carriculam);
    }
    if (teacherGender) {
      url.searchParams.append("teacherGender", teacherGender);
    }
    if (studentGender) {
      url.searchParams.append("studentGender", studentGender);
    }
    if (page) {
      url.searchParams.append("page", page.toString());
    }
    if (limit) {
      url.searchParams.append("limit", limit.toString());
    }

    const res = await fetch(
      url.toString(),
      {
        headers: {
          "Content-Type": "application/json",
        },
        next: {
          tags: ["student-posts"],
        },
        cache: "no-store",
      },
    );
    const result = res.json();
    console.log(result);
    return result;
  } catch (error: any) {
    return Error(error);
  }
};

export const getMyStudentPosts = async () => {
  try {
    const token = await getValidToken();
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/student-posts/my-posts`,
      {
        headers: {
          Authorization: token,
        },
        next: {
          tags: ["student-posts"],
        },
      },
    );
    const result = res.json();
    console.log(result);
    return result;
  } catch (error: any) {
    return Error(error);
  }
};

export const getSingleStudentPosts = async (postId: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/student-posts/${postId}`,
      {
        next: {
          tags: ["student-posts"],
        },
      },
    );
    const data = await res.json();
    return data;
  } catch (error: any) {
    return Error(error.message);
  }
};

export const updateStudentPost = async (
  postData: Record<string, unknown>,
  postId: string,
) => {
  try {
    const token = await getValidToken();
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/student-posts/${postId}`,
      {
        method: "PATCH",
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      },
    );
    revalidateTag("student-posts");
    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};

export const DeleteStudentPost = async (postId: string): Promise<any> => {
  try {
    const token = await getValidToken();
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/student-posts/${postId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: token,
        },
      },
    );
    revalidateTag("student-posts");
    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};
