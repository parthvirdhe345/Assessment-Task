import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProfileData from "../data/profiles.json";
import NavBar from "./Navigation/NavBar";

function ProfileMap() {
  const { profileId, latitude, longitude } = useParams();
  const [profileName, setProfileName] = useState("");
  const [correspondingName, setCorrespondingName] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [correspondingImage, setCorrespondingImage] = useState("");
  const [address, setAddress] = useState(""); // Define address state

  // Parse latitude and longitude as floats (assuming they are strings)
  const lat = parseFloat(latitude);
  const lon = parseFloat(longitude);

  useEffect(() => {
    // Find the profile with the matching id
    const profile = ProfileData.find((profile) => profile.id === parseInt(profileId));

    // Set the profile name and image if found
    if (profile) {
      setProfileName(profile.name);
      setProfileImage(profile.profileImage);

      // Find the corresponding profile
      const correspondingProfile = ProfileData.find((p) => p.id === parseInt(profileId));
      if (correspondingProfile) {
        setCorrespondingName(correspondingProfile.name);
        setCorrespondingImage(correspondingProfile.profileImage);
        setAddress(correspondingProfile.address); // Set address from corresponding profile
      }
    }
  }, [profileId]);

  useEffect(() => {
    const iframeData = document.getElementById("iframeId");

    if (!isNaN(lat) && !isNaN(lon)) {
      // Use the parsed latitude and longitude in the iframe URL
      iframeData.src = `https://maps.google.com/maps?q=${lat},${lon}&hl=es;&output=embed`;
    }
  }, [lat, lon]);

  return (
    <div>
      <div className="w-full top-0 fixed shadow-xl">
          <NavBar />
        </div>
      <div className="fixed top-14 right-0 m-4 shadow-md hover:cursor-pointer hover:scale-105 duration-100 bg-white rounded-lg shadow-XL p-2">
        <div className="flex justify-center items-center gap-4">
          <img
            src={profileImage}
            alt={profileName}
            className="w-20 h-20 rounded-full mb-2 "
          />
          <h3 className="text-xl font-semibold">{profileName}</h3>
        </div>
        <div className="text-gray-500 text-right">{address}</div> {/* Display address */}
      </div>
      <div className="mt-16">

      <iframe id="iframeId" height="660px" width="100%"></iframe>
      </div>
    </div>
  );
}

export default ProfileMap;
