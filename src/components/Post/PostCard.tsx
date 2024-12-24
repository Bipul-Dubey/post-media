import { Edit, Heart, MessageCircle, Send } from "lucide-react";
import React, { useEffect, useState } from "react";
import Comment from "../Comment/CommentCard";

// Dummy API Call Function
const fetchPostData = async (id: string) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id,
        user: {
          name: "Neil Sims",
          avatar: "https://via.placeholder.com/150",
        },
        date: "12 April at 09:28 PM",
        content:
          "Hi @everyone, the new designs are attached. Go check them out and let me know if I missed anything. Thanks!",
        images: [
          "https://via.placeholder.com/200x150",
          "https://via.placeholder.com/200x150",
        ],
        comments: 7,
        likes: 457,
      });
    }, 1000);
  });
};

type PostData = {
  id: string;
  user: { name: string; avatar: string };
  date: string;
  content: string;
  images: string[];
  comments: number;
  likes: number;
};

type PostCardProps = {
  postId: string;
};

const PostCard: React.FC<PostCardProps> = ({ postId }) => {
  const [post, setPost] = useState<PostData | null>(null);

  useEffect(() => {
    const loadPost = async () => {
      const postData = await fetchPostData(postId);
      setPost(postData as PostData);
    };
    loadPost();
  }, [postId]);

  if (!post) {
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6 p-6">
        Loading...
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6 p-6">
      <div className="flex justify-between">
        <div className="flex items-center mb-4">
          <img
            src={post.user.avatar}
            alt={`${post.user.name}'s avatar`}
            className="w-12 h-12 rounded-full mr-4"
          />
          <div>
            <h3 className="font-bold text-lg">{post.user.name}</h3>
            <p className="text-gray-500 text-sm">{post.date}</p>
          </div>
        </div>
        <div>
          {/* <EllipsisVertical /> */}
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Edit />
          </button>
        </div>
      </div>
      <p className="text-gray-800 mb-4">{post.content}</p>
      <div className="flex gap-4 mb-4">
        {post.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Post image ${index + 1}`}
            className="w-1/2 rounded-lg"
          />
        ))}
      </div>

      <div className="flex items-center space-x-4 my-2 border-y py-1.5">
        <button className="flex items-center space-x-1">
          <Heart className="w-5 h-5" />
          <span>{post.likes}</span>
        </button>
        <button className="flex items-center space-x-1">
          <MessageCircle className="w-5 h-5" />
          <span>{post.comments}</span>
        </button>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <input
          type="text"
          placeholder="Write a comment"
          className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 flex items-center"
          title="Send Comment"
        >
          <Send className="w-5 h-5" />
        </button>
      </div>
      <Comment commentId="1234234" />
      <Comment commentId="1234234" />
      <Comment commentId="1234234" />
    </div>
  );
};

export default PostCard;
