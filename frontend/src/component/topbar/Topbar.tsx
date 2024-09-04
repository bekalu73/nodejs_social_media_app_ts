import React from "react";
import { Search, Person, Chat, Notifications } from "@mui/icons-material";
import person1 from "../../assets/person/1.jpeg";

const Topbar: React.FC = () => {
  return (
    <div className="h-[50px] w-full bg-[#1877f2] flex items-center sticky top-0 z-[999]">
      <div className="flex-[3]">
        <span className="text-2xl ml-5 font-bold text-white cursor-pointer">
          B-social
        </span>
      </div>
      <div className="flex-[5]">
        <div className="w-full h-[30px] bg-white rounded-full flex items-center">
          <Search className="text-[20px] ml-2.5" />
          <input
            placeholder="Search for friend, post or video"
            className="border-none w-[70%] focus:outline-none ml-2.5"
          />
        </div>
      </div>
      <div className="flex-[4] flex items-center justify-around text-white">
        <div className="flex">
          <span className="mr-2.5 text-sm cursor-pointer">Homepage</span>
          <span className="mr-2.5 text-sm cursor-pointer">Timeline</span>
        </div>
        <div className="flex">
          <div className="relative mr-3.5 cursor-pointer">
            <Person />
            <span className="w-[15px] h-[15px] bg-red-500 rounded-full text-white flex items-center justify-center text-[12px] absolute top-[-5px] right-[-5px]">
              1
            </span>
          </div>
          <div className="relative mr-3.5 cursor-pointer">
            <Chat />
            <span className="w-[15px] h-[15px] bg-red-500 rounded-full text-white flex items-center justify-center text-[12px] absolute top-[-5px] right-[-5px]">
              2
            </span>
          </div>
          <div className="relative mr-3.5 cursor-pointer">
            <Notifications />
            <span className="w-[15px] h-[15px] bg-red-500 rounded-full text-white flex items-center justify-center text-[12px] absolute top-[-5px] right-[-5px]">
              1
            </span>
          </div>
        </div>
        <img
          src={person1}
          alt="Profile"
          className="w-[32px] h-[32px] rounded-full object-cover cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Topbar;
