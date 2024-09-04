import React from "react";
import Topbar from "../../component/topbar/Topbar";
import Sidebar from "../../component/sidebar/Sidebar";
import Feed from "../../component/feed/Feed";
import Rightbar from "../../component/rightbar/Rightbar";
import profileCover from "../../assets/post/3.jpeg";
import profile from "../../assets/person/7.jpeg";

const Profile: React.FC = () => {
  return (
    <>
      <Topbar />
      <div className="flex min-h-screen">
        <div className="w-1/4">
          <Sidebar />
        </div>
        <div className="flex-1 flex flex-col">
          <div className="relative h-[250px]">
            <img
              className="w-full h-[250px] object-cover"
              src={profileCover}
              alt="Profile Cover"
            />
            <img
              className="w-[150px] h-[150px] rounded-full object-cover absolute left-1/2 transform -translate-x-1/2 top-[150px] border-4 border-white"
              src={profile}
              alt="Profile"
            />
          </div>
          <div className="flex flex-col items-center justify-center mt-16">
            <h4 className="text-2xl font-semibold">Bekalu Sisay</h4>
            <span className="font-light text-gray-600">Hello my friends!</span>
          </div>
          <div className="flex flex-1 mt-8">
            <div className="flex-1">
              <Feed />
            </div>
            <div className="w-1/4">
              <Rightbar profile /> {/* Rightbar with fixed width */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
