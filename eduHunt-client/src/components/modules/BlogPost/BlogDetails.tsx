import { IBlog } from "@/types/blog";
import { Calendar } from "lucide-react";
import Image from "next/image";

const BlogDetails = ({ blog }: { blog: IBlog }) => {
  return (
    <div className="md:w-2/3 bg-white dark:bg-black border dark:border-gray-500 shadow-lg rounded-lg mx-auto p-6">
      <p className="flex items-center justify-center mx-auto text-purple-500 bg-purple-100 w-fit px-3 py-1 rounded-full">
        <Calendar className="mr-2" />
        {blog.createdAt
          ? new Date(blog.createdAt).toLocaleDateString()
          : "Unknown Date"}
      </p>
      <h2 className="text-center text-2xl md:text-4xl font-semibold my-5">
        {blog.title}
      </h2>
      <div className="flex items-center justify-center bg-gray-100 dark:bg-slate-400 mb-5 py-2 rounded-lg gap-2">
        <Image
          src={
            blog.authorImage ||
            "https://cdn-icons-png.flaticon.com/512/219/219986.png"
          }
          width={30}
          height={30}
          alt="author image"
        />

        <span className="text-lg font-medium">{blog.author}</span>
      </div>
      <figure className="mb-5">
        <Image
          src={blog?.image || "/default-image.png"}
          width={600}
          height={100}
          alt="blog image"
          className="rounded-lg w-full object-cover"
        />
      </figure>
      <div className="flex items-center gap-2">
        {blog.tags.map((tag, idx) => (
          <p
            key={idx}
            className="bg-purple-100 text-purple-500 p-2 rounded-2xl"
          >
            #{tag}
          </p>
        ))}
      </div>
      <div className="text-xl md:text-2xl my-2 leading-relaxed">
        <p>{blog.subtitle}</p>
      </div>
      <div className="text-gray-700 text-lg ">
        <p className="text-gray-500">{blog.description}</p>
      </div>
    </div>
  );
};

export default BlogDetails;
