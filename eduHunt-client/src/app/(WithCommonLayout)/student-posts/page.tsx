import StudentPostCard from "@/components/modules/StudentPost/SudentPostCard";
import { getAllStudentPosts } from "@/services/StudentPost";
import { IStudentPost } from "@/types";

const StudentPostsPage = async () => {
  const { data: postData } = await getAllStudentPosts();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 my-10">
      {postData?.map((posts: IStudentPost, idx: number) => (
        <StudentPostCard key={idx} posts={posts} />
      ))}
    </div>
  );
};

export default StudentPostsPage;
