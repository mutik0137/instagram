import React, {Component} from "react";
import User from "../../Users/User/User";


export default class Post extends Component{
  render() {
    return (
      <div className="post">
        <User 
          src="https://avatars.mds.yandex.net/get-pdb/1822843/8300d161-937d-4ce4-a1ad-1e7881397ad6/s1200" 
          alt="man"
          name="Scott"
          min={true}
        />
        <img src={this.props.src} alt={this.props.alt}></img>
        <div className="post__name">
          some account
        </div>
        <div className="post__descr">
          some account some account some account some account some account some account some account some account
          some account some account some account some account some account some account some account some account
          some account some account some account some account some account some account some account some account 
        </div>
      </div>
    )
  }
}