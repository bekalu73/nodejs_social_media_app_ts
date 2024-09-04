import { combineReducers } from "redux";
import { postData } from "./post/reducer";

const rootReducer = combineReducers({
  postData,
});
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
