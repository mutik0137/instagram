import React from "react";
import User from "./User/User";

export default function Users() {
  return (
    <div className="right">
      <User 
          src="https://avatars.mds.yandex.net/get-pdb/1822843/8300d161-937d-4ce4-a1ad-1e7881397ad6/s1200" 
          alt="man"
          name="Scott"
          min={true}
        />
        <div className="users__block">
          <User 
            src="https://avatars.mds.yandex.net/get-pdb/1822843/8300d161-937d-4ce4-a1ad-1e7881397ad6/s1200" 
            alt="man"
            name="Scott"
            min={true}
          />
          <User 
            src="https://avatars.mds.yandex.net/get-pdb/1822843/8300d161-937d-4ce4-a1ad-1e7881397ad6/s1200" 
            alt="man"
            name="Scott"
            min={true}
          />
        </div>
    </div>
  )
}