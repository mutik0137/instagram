import React, {Component} from "react";
import Post from "./Post/Post";

export default class Posts extends Component {
  render() {
    return(
      <div className="left">
        <Post src="https://avatars.mds.yandex.net/get-pdb/2365395/c1db7b4b-8b13-4ff8-807d-793cffd52eb0/s1200" alt="instance" />
      </div>
    )
  }
}