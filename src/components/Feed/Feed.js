import React from "react";
import Posts from "./Posts/Posts";
import Users from "./Users/Users";


export default function Feed() {
  return (
    <div className="container feed">
      <Posts />
      <Users />
    </div>
  )
} 