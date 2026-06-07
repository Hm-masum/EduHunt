"use server";

import { getValidToken } from "@/lib/verifyToken";
import { revalidateTag } from "next/cache";

export const getAllTutors = async (
  searchText?: string,
  gender?: string,
  page?: string | number,
  limit?: string | number,
) => {
  try {
    const url = new URL(`${process.env.NEXT_PUBLIC_BASE_API}/tutors`);
    
    if (searchText) {
      url.searchParams.append("searchText", searchText);
    }
    if (gender) {
      url.searchParams.append("gender", gender);
    }

    if (page) {
      url.searchParams.append("page", page.toString());
    }
    if (limit) {
      url.searchParams.append("limit", limit.toString());
    }

    const res = await fetch(url.toString(), {
      headers: {
        "Content-Type": "application/json",
      },
      next: {
        tags: ["Tutors"],
      },
      cache: "no-store",
    });
    const result = res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};

export const getSingleTutor = async (tutorId: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/tutors/${tutorId}`,
      {
        next: {
          tags: ["Tutors"],
        },
      },
    );
    const data = await res.json();
    return data;
  } catch (error: any) {
    return Error(error.message);
  }
};

export const updateTutor = async (
  tutorData: Record<string, unknown>,
  tutorId: string,
) => {
  try {
    const token = await getValidToken();
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/tutors/${tutorId}`,
      {
        method: "PATCH",
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(tutorData),
      },
    );
    revalidateTag("Tutors");
    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};

export const DeleteTutor = async (tutorId: string): Promise<any> => {
  try {
    const token = await getValidToken();
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/tutors/${tutorId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: token,
        },
      },
    );
    revalidateTag("Tutors");
    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};
