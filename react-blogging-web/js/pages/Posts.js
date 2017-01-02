import React from "react";
import {Link} from "react-router";
import PostStore from "../stores/PostStore";

export default class Posts extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: PostStore.getAll()
    };
  }
  render() {
    const {posts} = this.state;
    const postsComponents = posts.map( (post) => {
      return <h1 class="title"><Link to={"post/" + post.id}>{post.title}</Link></h1>
    } );
    return (
      <div>
        <article>{postsComponents}</article>
      </div>      
    );
  }
}
