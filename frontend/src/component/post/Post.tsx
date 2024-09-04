import React, { useState } from "react";
import { MoreVert } from "@mui/icons-material";
import { Users } from "../../dummyData";
import postPlaceholder from "../../assets/post/2.jpeg";
import userPlaceholder from "../../assets/person/4.jpeg";
import heartPic from "../../assets/heart.png";
import likePic from "../../assets/like.png";

// Define the Post type here
interface Post {
  id: number;
  userId: number;
  photo: string;
  date: string;
  like: number;
  comment: number;
  desc?: string;
}

interface PostProps {
  post: Post;
}

const Post: React.FC<PostProps> = ({ post }) => {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);
  console.log(post);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  const user = Users.find((u) => u.id === post.userId);

  return (
    <div className="max-w-3xl mx-auto rounded-lg shadow-lg my-8 p-4 bg-white ">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <img
            className="w-8 h-8 rounded-full object-cover mr-3"
            src={userPlaceholder}
            alt={user?.username}
          />
          <div>
            <span className="font-semibold">{user?.username}</span>
            <span className="text-gray-500 text-sm ml-2">{post.date}</span>
          </div>
        </div>
        <MoreVert />
      </div>
      <div className="mb-4">
        <p className="text-gray-700">{post.desc}</p>
        <img
          className="w-full mt-4 max-h-80 object-contain"
          src={postPlaceholder}
          alt="Post"
        />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img
            className="w-6 h-6 mr-2 cursor-pointer"
            src={likePic}
            onClick={likeHandler}
            alt="Like"
          />
          <img
            className="w-6 h-6 mr-2 cursor-pointer"
            src={heartPic}
            onClick={likeHandler}
            alt="Heart"
          />
          <span className="text-gray-700">{like} people like it</span>
        </div>
        <span className="text-gray-500 cursor-pointer">
          {post.comment} comments
        </span>
      </div>
    </div>
  );
};

export default Post;
