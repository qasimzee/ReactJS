import React from "react"
var axios = require('axios');
import PostStore from "../stores/PostStore";
import * as PostActions from "../actions/PostActions";

export default class Post extends React.Component {
  constructor() {
    super();
    this.state = {
      post: PostStore.getCurrentPost(),
    };
  }
  componentWillMount() {
    PostActions.loadPost(this.props.params.id);
    PostStore.on("change", () => {
      this.setState({
        post: PostStore.getCurrentPost(),  
      });
    });
    
  }
  
  render() {
    const {post} = this.state;
    return (
      <div>
        <h1>{post.title}</h1>
        <article>
          <p>{post.content}</p>
        </article>
      </div>      
    );
  }
}
