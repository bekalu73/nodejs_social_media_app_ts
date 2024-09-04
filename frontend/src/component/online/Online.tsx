import React from "react";
import profilePicture from "../../assets/person/9.jpeg";

// Define the User type
interface User {
  id: number;
  profilePicture: string;
  username: string;
}

// Define the component props
interface OnlineProps {
  user: User;
}

const Online: React.FC<OnlineProps> = ({ user }) => {
  return (
    <li className="flex items-center mb-4">
      <div className="relative mr-2">
        <img
          className="w-10 h-10 rounded-full object-cover"
          src={profilePicture}
          alt={user.username}
        />
        <span className="w-3 h-3 bg-lime-600 rounded-full absolute top-0 right-0 border-2 border-white"></span>
      </div>
      <span className="font-medium bg-red-700">{user.username}</span>
    </li>
  );
};

export default Online;
