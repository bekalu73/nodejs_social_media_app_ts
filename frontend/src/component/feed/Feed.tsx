import React, { useEffect } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../context/store";
import { posts } from "../../context/Actions/post/postActions";
import { RootState } from "../../context/Reducer/rootReducer";
import { Post as PostType } from "../../types/types";

const Feed: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();

  // Ensure postsData is correctly typed and logged
  const postsData = useSelector(
    (state: RootState) => state.postData as PostType[]
  );
  console.log("Posts Data:", postsData);

  useEffect(() => {
    dispatch(posts());
  }, [dispatch]);

  // Convert strings to Date objects if necessary and sort posts
  const sortedPosts = postsData
    .map((post) => ({
      ...post,
      date: new Date(post.date),
    }))
    .sort((a, b) => b.date.getTime() - a.date.getTime());

  console.log("Sorted Posts:", sortedPosts);

  return (
    <div className="flex-1 p-5">
      <div className="space-y-4">
        <Share />
        {sortedPosts.length > 0 ? (
          sortedPosts.map((post) => <Post key={post.id} post={post} />)
        ) : (
          <p>No posts available.</p>
        )}
      </div>
    </div>
  );
};

export default Feed;
