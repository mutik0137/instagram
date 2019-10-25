import React, {useState, useEffect} from "react";
import User from "./User/User";
import InstaService from "../services/InstaService";


const InstaService_ = new InstaService();

export default function Users() {
  const [posts, setPosts] = useState([]);

  useEffect( () => {
    updateUsers();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function updateUsers() {
    InstaService_.getAllPosts()
      .then(onPostsLoaded)
      .catch(onError);
  }

  function onPostsLoaded(posts) {
    setPosts(posts);
  }

  function onError() {
    setPosts([]);
  }
  
  return (
    <div className="right">
      {posts[0] && 
      <User 
          src={posts[0].src}
          alt={posts[0].alt}
          name={posts[0].name}
          min={true}
      />}
      <div className="users__block">
        {posts.map( (post, index) => 
          index > 0 &&
          <User 
            src={post.src}
            alt={post.alt}
            name={post.name}
            min={true}
          />
        )}
        </div>
    </div>
  )
}