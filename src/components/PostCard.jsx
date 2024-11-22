import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { timeFormat } from "../utils/timeFormat";
import { useNavigate } from "react-router-dom";

const PostCard = ({ post, onDelete }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  const handleEdit = (id) => {
    navigate(`/post/edit/${id}`);
  };

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="w-96 border-b border-gray-800">
      <div className="flex justify-between items-center p-2 border border-gray-900 rounded-t-md">
        <div className="flex items-center gap-2">
          <div className="border rounded-full p-2">
            <FaUser className="text-white" />
          </div>
          <h1 className="text-white">boobalan1204</h1>
          <div className="h-1 w-1 rounded-full bg-gray-400"></div>
          <h1 className="text-gray-400 text-sm">
            {timeFormat(post.createdAt)}
          </h1>
        </div>
        <div className="relative">
          <button
            className="text-white pb-2 text-base"
            onClick={handleMenuClick}
          >
            &#8230;
          </button>
          {showMenu && (
            <div className="absolute right-0 bg-white shadow-md rounded-lg p-2">
              <button
                onClick={() => handleEdit(post._id)}
                className="block text-sm text-gray-800 hover:bg-gray-100 w-full px-2 py-1 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(post._id)}
                className="block text-sm text-red-600 hover:bg-gray-100 w-full px-2 py-1 rounded"
              >
                Delete
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="border border-gray-900 p-2">
        <img
          src={`http://localhost:8081${post.image}`}
          alt={post.title}
          className="w-full h-64 object-contain rounded-t-lg"
        />
      </div>

      <div className="p-4">
        <h3 className="truncate text-white flex gap-4 items-center">
          <h1 className="text-white font-medium text-base">boobalan1204</h1>{" "}
          <h2 className="text-sm text-white font-normal">{post.title}</h2>
        </h3>
        <p className="mt-2 text-sm text-white">
          {isExpanded && post.description}
          {post.description && (
            <button
              onClick={toggleDescription}
              className="text-gray-400 hover:underline ml-1"
            >
              {isExpanded ? "...less" : "...More"}
            </button>
          )}
        </p>
      </div>
    </div>
  );
};

export default PostCard;
