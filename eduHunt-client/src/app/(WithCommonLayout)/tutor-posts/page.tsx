import TutorPostCard from "@/components/modules/TutorPost/TutorPostCard";
import { getAllTutorPosts } from "@/services/TutorPost";
import { ITutorPost } from "@/types";

const TutorPostPage = async () => {
  const { data: postData } = await getAllTutorPosts();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 my-10">
      {postData?.map((posts: ITutorPost, idx: number) => (
        <TutorPostCard key={idx} posts={posts} />
      ))}
    </div>
  );
};

export default TutorPostPage;
