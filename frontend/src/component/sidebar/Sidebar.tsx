import React from "react";
import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,
} from "@mui/icons-material";
import { Users } from "../../dummyData";
import CloseFriend from "../closeFriend/CloseFriend";

// Define the User interface for TypeScript
interface User {
  id: number;
  profilePicture: string;
  username: string;
}

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 h-[calc(100vh-50px)] overflow-y-auto sticky top-12 bg-gray-100">
      <div className="p-5">
        <ul className="list-none p-0 m-0">
          <li className="flex items-center mb-5">
            <RssFeed className="mr-4 text-blue-500" />
            <span className="text-gray-700">Feed</span>
          </li>
          <li className="flex items-center mb-5">
            <Chat className="mr-4 text-blue-500" />
            <span className="text-gray-700">Chats</span>
          </li>
          <li className="flex items-center mb-5">
            <PlayCircleFilledOutlined className="mr-4 text-blue-500" />
            <span className="text-gray-700">Videos</span>
          </li>
          <li className="flex items-center mb-5">
            <Group className="mr-4 text-blue-500" />
            <span className="text-gray-700">Groups</span>
          </li>
          <li className="flex items-center mb-5">
            <Bookmark className="mr-4 text-blue-500" />
            <span className="text-gray-700">Bookmarks</span>
          </li>
          <li className="flex items-center mb-5">
            <HelpOutline className="mr-4 text-blue-500" />
            <span className="text-gray-700">Questions</span>
          </li>
          <li className="flex items-center mb-5">
            <WorkOutline className="mr-4 text-blue-500" />
            <span className="text-gray-700">Jobs</span>
          </li>
          <li className="flex items-center mb-5">
            <Event className="mr-4 text-blue-500" />
            <span className="text-gray-700">Events</span>
          </li>
          <li className="flex items-center mb-5">
            <School className="mr-4 text-blue-500" />
            <span className="text-gray-700">Courses</span>
          </li>
        </ul>
        <button className="w-36 border-none py-2 px-4 rounded-md font-medium bg-blue-500 text-white">
          Show More
        </button>
        <hr className="my-5" />
        <ul className="list-none p-0 m-0">
          {Users.map((user: User) => (
            <CloseFriend key={user.id} user={user} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
