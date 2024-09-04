import { PostAction, PostState } from "../../../types/types";
import { SET_POSTS } from "../../action_types";

// Define the reducer function with proper types
export const postData = (
  state: PostState = [],
  action: PostAction
): PostState => {
  switch (action.type) {
    case SET_POSTS:
      console.warn("SET_POSTS condition ", action);
      return [...action.data];
    default:
      return state;
  }
};
