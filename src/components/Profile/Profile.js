import React from "react";
import User from "../Users/User/User";
import Palette from "../Palette/Palette";


const Profile = () => {
  return (
    <div className="container profile">
      <User 
        src="https://avatars.mds.yandex.net/get-pdb/1822843/8300d161-937d-4ce4-a1ad-1e7881397ad6/s1200" 
        alt = "man"
        name = "Scott"
        /* min */ /* За рамер картинки */
      />
      <Palette />
    </div>
  )
}

export default Profile;