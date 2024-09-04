import React from "react";
import { PermMedia, Label, Room, EmojiEmotions } from "@mui/icons-material";
import sharePic from "../..//assets/person/1.jpeg";

const Share: React.FC = () => {
  return (
    <div className="w-full h-40 rounded-lg shadow-lg p-4 bg-white">
      <div className="flex items-center mb-4">
        <img
          className="w-12 h-12 rounded-full object-cover mr-3"
          src={sharePic}
          alt="Profile"
        />
        <input
          placeholder="What's on your mind?"
          className="w-full border-none p-2 bg-gray-100 rounded-lg focus:outline-none"
        />
      </div>
      <hr className="my-4" />
      <div className="flex items-center justify-between">
        <div className="flex ml-4">
          <div className="flex items-center mr-4 cursor-pointer">
            <PermMedia htmlColor="tomato" className="text-xl mr-1" />
            <span className="text-sm font-medium">Photo or Video</span>
          </div>
          <div className="flex items-center mr-4 cursor-pointer">
            <Label htmlColor="blue" className="text-xl mr-1" />
            <span className="text-sm font-medium">Tag</span>
          </div>
          <div className="flex items-center mr-4 cursor-pointer">
            <Room htmlColor="green" className="text-xl mr-1" />
            <span className="text-sm font-medium">Location</span>
          </div>
          <div className="flex items-center cursor-pointer">
            <EmojiEmotions htmlColor="goldenrod" className="text-xl mr-1" />
            <span className="text-sm font-medium">Feelings</span>
          </div>
        </div>
        <button className="bg-green-500 text-white px-4 py-2 rounded-md font-medium cursor-pointer">
          Share
        </button>
      </div>
    </div>
  );
};

export default Share;
