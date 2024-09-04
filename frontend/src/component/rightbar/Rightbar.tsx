import React from "react";
import { Users } from "../../dummyData";
import Online from "../online/Online";
import adPic from "../../assets/ad.png";
import giftPic from "../../assets/gift.png";
import personOnline from "../../assets/person/4.jpeg";

// Define the User type directly in this file
interface User {
  id: number;
  profilePicture: string;
  username: string;
}

interface RightbarProps {
  profile?: boolean;
}

const Rightbar: React.FC<RightbarProps> = ({ profile }) => {
  const HomeRightbar = () => {
    return (
      <>
        <div className="flex items-center mb-6">
          <img className="w-10 h-10 mr-2" src={giftPic} alt="Birthday" />
          <span className="text-sm font-light">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today.
          </span>
        </div>
        <img
          className="w-full rounded-lg mb-8"
          src={adPic}
          alt="Advertisement"
        />
        <h4 className="text-xl font-medium mb-4">Online Friends</h4>
        <ul className="p-0 m-0 list-none">
          {Users.map((user: User) => (
            <Online key={user.id} user={user} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="text-xl font-medium mb-4">User Information</h4>
        <div className="mb-8">
          <div className="mb-4">
            <span className="font-medium text-gray-700 mr-4">City:</span>
            <span className="font-light">New York</span>
          </div>
          <div className="mb-4">
            <span className="font-medium text-gray-700 mr-4">From:</span>
            <span className="font-light">Madrid</span>
          </div>
          <div className="mb-4">
            <span className="font-medium text-gray-700 mr-4">
              Relationship:
            </span>
            <span className="font-light">Single</span>
          </div>
        </div>
        <h4 className="text-xl font-medium mb-4">User Friends</h4>
        <div className="flex flex-wrap justify-between">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="flex flex-col mb-5 cursor-pointer">
              <img
                // src={`../..//assets/person/${index + 1}.jpeg`}
                src={personOnline}
                alt={`Friend ${index + 1}`}
                className="w-24 h-24 object-cover rounded-sm"
              />
              <span className="text-sm font-light mt-2">John Carter</span>
            </div>
          ))}
        </div>
      </>
    );
  };

  return (
    <div className="flex-3.5 p-5">
      <div className="p-5">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
};

export default Rightbar;
