import React, {Component} from "react";

import User from "../Users/User//User";
import ErrorMessage from "../../Error/Error";

import InstaService from "../../services/InstaService";

export default class Posts extends Component {
  InstaService = new InstaService();
  state = {
    posts: [],
    error: false,
  }

  componentDidMount() {
    this.updatePosts();
  }

  updatePosts() {
    this.InstaService.getAllPosts()
      // не нужно this.onPostsLoaded(data), data автоматически попадет в onPostsLoaded
      .then(this.onPostsLoaded) 
      .catch(this.onError);
  }

  // on - приставка действия
  onPostsLoaded = (posts) => {
    this.setState({
      posts, // short object notation
      error: false
    })
  }

  onError = (error) => {
    this.setState({
      error: true
    })
  }

  renderItems(arr) {
    return arr.map( item => {
      const {name, altname, photo, src, alt, descr, id} = item;

      return (
        <div key={id} className="post">
        <User 
          src={photo} 
          alt={altname}
          name={alt}
          min
        />
        <img src={src} alt={alt}></img>
        <div className="post__name">
          {name}
        </div>
        <div className="post__descr">
          {descr}
        </div>
      </div>
      )
    })
  }

  render() {
    const {error, posts} = this.state;
    const items = this.renderItems(posts);
    
    if (error) {
      return <ErrorMessage />
    }
    return(
      <div className="left">
        {items}
      </div>
    )
  }
}