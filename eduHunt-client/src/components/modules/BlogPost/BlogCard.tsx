import { IBlog } from "@/types/blog";
import { Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ blog }: { blog: IBlog }) => {
  return (
    <div className="w-full bg-white dark:bg-black shadow-sm border border-gray-400 hover:border-purple-800 rounded-lg overflow-hidden">
      <figure>
        <Image
          src={blog.image || "/default-image.png"}
          width={600}
          height={100}
          alt="blog image"
          className="rounded-t-lg h-64 object-cover"
        />
      </figure>
      <div className="p-6">
        <p className="flex items-center justify-center text-purple-600 bg-purple-100 w-32 rounded-full py-1 text-sm">
          <Calendar className="mr-2" />
          {blog.createdAt
            ? new Date(blog.createdAt).toLocaleDateString()
            : "Unknown Date"}
        </p>

        <h2 className="text-xl font-bold mt-4">
          {blog.title.length > 30
            ? blog.title.slice(0, 30) + "..."
            : blog.title}
        </h2>

        <p className="text-gray-400 mt-2">
          {blog.description.length > 100
            ? blog.description.slice(0, 60) + "..."
            : blog.description}
          <Link href={`/blogs/${blog._id}`} className="text-purple-600 ml-1">
            Read More
          </Link>
        </p>

        <div className="flex justify-between items-center mt-5">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full overflow-hidden mr-2">
              <Image
                src={
                  blog?.authorImage ||
                  "https://cdn-icons-png.flaticon.com/512/219/219986.png"
                }
                width={100}
                height={100}
                alt="author image"
                className="object-cover"
              />
            </div>
            <span className="text-sm font-medium text-gray-500">
              {blog.author}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
