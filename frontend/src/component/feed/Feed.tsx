import Post from "../post/Post";
import Share from "../share/Share";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../context/store";
import { posts } from "../../context/Actions/post/postActions";
import { RootState } from "../../context/Reducer/rootReducer";
import { useEffect } from "react";

const Feed: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();

  const postsData = useSelector((state: RootState) => state.postData);
  console.log(postsData);

  useEffect(() => {
    dispatch(posts());
  }, [dispatch]);

  return (
    <div className="flex-1 p-5">
      <div className="space-y-4">
        <Share />
        {postsData && postsData.length > 0 ? (
          postsData.map((post) => <Post key={post.id} post={post} />)
        ) : (
          <p>No posts available.</p>
        )}
      </div>
    </div>
  );
};

export default Feed;
