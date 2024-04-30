import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdCall } from "react-icons/md";
import defaultProfileImageMale from "../Asset/Image/default-male-avatar.png"; // Import default profile image for male
import defaultProfileImageFemale from "../Asset/Image/default-female-avatar.png"; // Import default profile image for female
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineViewInAr } from "react-icons/md";
import NavBar from "./Navigation/NavBar";
import { BsSearch } from "react-icons/bs";
function ProfileList({ profiles }) {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter profiles based on search term or return all profiles if search term is empty
  const filteredProfiles = searchTerm
    ? profiles.filter((profile) =>
        profile.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : profiles;

  return (
    <div className="container flex flex-col align-middle justify-center">
      <div className="w-full top-0 fixed shadow-xl">
        <NavBar />
      </div>
      <div className="mt-16 w-[100%] flex justify-center items-center align-middle p-4 mx-auto">
        {/* <div className="flex m-auto"> */}
          <input
            type="text"
            placeholder="Search profiles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border w-[40%] h-full px-3 py-2 border-gray-400 rounded-md  flex"
          />
          <button className="-translate-x-10 rounded-lg p-2 justify-center align-middle bg-blue-500 text-white"><BsSearch className="w-6 h-6" /></button>

      </div>
      <div className="flex w-screen justify-center">
        <div className="justify-center align-middle items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-auto">
          {filteredProfiles.map((profile) => (
            <Link
              to={`/details/${profile.id}`}
              className="  rounded-xl cursor-pointer hover:p-2 overflow-hidden   hover:scale-105"
              key={profile.id}
            >
              <div className="flex flex-col items-center p-2 bg-white   rounded-xl  overflow-hidden  hover:shadow-xl hover:scale-105">
                <div className="relative justify-center">
                  <img
                    src={
                      profile.profileImage ||
                      (profile.gender === "female"
                        ? defaultProfileImageFemale
                        : defaultProfileImageMale)
                    }
                    alt={profile.name}
                    className="w-40 h-40 bg-cover rounded-full mb-4"
                  />
                  <div className="w-full m-2 flex gap-4 justify-between my-2">
                    <Link
                      to={`/map/${profile.id}/${profile.latitude}/${profile.longitude}`}
                      className="  rounded-xl  overflow-hidden  hover:shadow-lg hover:scale-105"
                      key={profile.id}
                    >
                      {" "}
                      <div className=" bottom-0 left-0 right-0 flex items-center  group-hover:opacity-100 rounded-xl  overflow-hidden  hover:shadow-lg hover:scale-105">
                        <button className="group rounded-full bg-blue-500 w-10 h-10  flex justify-center align-middle items-center duration-75 text-white hover:scale-110">
                          <IoLocationSharp className="w-6 h-6" />
                        </button>
                      </div>
                    </Link>
                    <div className="  flex justify-center items-center align-middle gap-4 hover:scale-110 duration-75  rounded-xl  overflow-hidden  hover:shadow-lg ">
                      <a href={`tel:${profile.phoneNumber}`}>
                        <div className="group rounded-full bg-blue-500 w-10 h-10  flex justify-center align-middle items-center duration-75">
                          <MdCall className="w-6 h-6 text-white hover:scale-110 hover:duration-75" />
                        </div>
                      </a>
                    </div>
                    <Link
                      to={`/details/${profile.id}`}
                      className="  rounded-xl  overflow-hidden  hover:shadow-lg hover:scale-105"
                      key={profile.id}
                    >
                      {" "}
                      <div className=" bottom-0 left-0 right-0 flex items-center  group-hover:opacity-100">
                        <button className="group rounded-full bg-blue-500 w-10 h-10  flex justify-center align-middle items-center duration-75 text-white hover:scale-110">
                          <MdOutlineViewInAr className="w-6 h-6" />
                        </button>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-2">{profile.name}</h3>
                  {/* <p className="text-gray-600 mb-2">{profile.email}</p> */}
                </div>
                <div className="flex w-full justify-end translate-y-4 pl-6">
                  <div className="text-gray-400 mb-2 w-[80%] flex justify-end">
                    {profile.address}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProfileList;
