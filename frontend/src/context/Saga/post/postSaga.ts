import { takeEvery, put, call } from "redux-saga/effects";
import { POSTS, SET_POSTS } from "../../action_types";
import { Post } from "../../../types/types";

// Function to fetch data from the API
const fetchPosts = async (): Promise<Post[]> => {
  const response = await fetch("http://localhost:8800/api/posts");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

// Define the type for the generator function
function* getPosts(): Generator<any, void, Post[]> {
  try {
    const data: Post[] = yield call(fetchPosts);
    console.log("action is called", data);
    yield put({ type: SET_POSTS, data });
  } catch (error) {
    console.error("Failed to fetch posts", error);
  }
}

function* postSaga() {
  yield takeEvery(POSTS, getPosts);
}

export default postSaga;
