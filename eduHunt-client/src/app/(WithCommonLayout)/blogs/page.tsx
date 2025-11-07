import BlogCard from "@/components/modules/BlogPost/BlogCard";
import { getAllBlog } from "@/services/Blog";
import { IBlog } from "@/types/blog";
import React from "react";

const BlogPage = async () => {
  const { data: blogData } = await getAllBlog();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
      {blogData?.map((blog: IBlog, idx: number) => (
        <BlogCard key={idx} blog={blog} />
      ))}
    </div>
  );
};

export default BlogPage;
