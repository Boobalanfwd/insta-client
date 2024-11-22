import { useEffect, useState } from "react";
import PostCard from "./PostCard";
import { deletePost, getAllPosts } from "../api/postApi";

const Home = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const data = await getAllPosts();
      setPosts(data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deletePost(id);
      await fetchPosts();
    } catch (error) {
      console.error("Failed to delete post:", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="bg-black ">
      <div className="max-w-[500px] mx-auto ">
        <h1 className="text-center text-3xl font-bold p-6 text-white ">
          Instagram
        </h1>
        <div className="flex justify-center items-center mt-10">
          <div className="grid grid-cols-1 gap-6 p-4">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} onDelete={handleDelete} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
