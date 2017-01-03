import React from "react";
import {Link} from "react-router";
import PostStore from "../stores/PostStore";
import * as PostActions from "../actions/PostActions";

export default class Posts extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: PostStore.getAll()
    };
  }
  componentWillMount() {
    PostActions.loadPosts();
    PostStore.on("change", () => {
      var posts = PostStore.getAll();
      if (posts) {
        this.setState({
          posts: posts,
        });  
      }
      
    });
  }

  render() {
    const {posts} = this.state;
    const postsComponents = posts.map( (post) => {
      return <h2 class="title">
        <Link to={"post/" + post.id} dangerouslySetInnerHTML={{__html: post.title.rendered}}></Link>
      </h2>
    } );
    return (
      <div>
        {postsComponents}
      </div>      
    );
  }
}
