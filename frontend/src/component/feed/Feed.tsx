import Post from "../post/Post";
import Share from "../share/Share";
import { Posts } from "../../dummyData";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../context/store";
import { posts } from "../../context/Actions/post/postActions";
import { RootState } from "../../context/Reducer/rootReducer";
import { useEffect } from "react";
const Feed: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();

  let post = useSelector((state: RootState) => state.postData);
  console.log(post);

  useEffect(() => {
    dispatch(posts());
  }, []);
  return (
    <div className="flex-1 p-5">
      <div className="space-y-4">
        <Share />
        {Posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
