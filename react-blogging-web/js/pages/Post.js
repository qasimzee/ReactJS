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
      var current_post = PostStore.getCurrentPost();
      if (current_post) {
        this.setState({
          post: current_post,
        });  
      }
      
    });
    
  }

  render() {
    const {post} = this.state;
    return (
      <div>
        <h1 dangerouslySetInnerHTML={{__html: post.title}}></h1>
        <article>
          <p dangerouslySetInnerHTML={{__html: post.content}}></p>
        </article>
      </div>      
    );
  }
}
