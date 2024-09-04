import { SET_POSTS } from "../context/action_types";

// Define the type for your API response
export interface Post {
  id: number;
  desc?: string;
  photo?: string;
  date: Date;
  userId: number;
  likes: string[];
  comment: number;
}

// Define the type for your action
export interface SetPostsAction {
  type: typeof SET_POSTS;
  data: Post[];
}

// Define a union type for all actions if there are multiple
export type PostAction = SetPostsAction;

// Define the initial state type
export type PostState = Post[];
