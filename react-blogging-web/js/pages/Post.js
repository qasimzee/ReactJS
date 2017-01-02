import React from "react"
var axios = require('axios');
import PostStore from "../stores/PostStore";
import * as PostActions from "../actions/PostActions";

export default class Post extends React.Component {
  constructor() {
    super();
    this.state = {
      post: {
        title: "",
        contnet: ""
      },
    };
  }
  // componentDidMount: function() {
  //   var _this = this;
  //   PostActions.loadPost(this.props.params.id);
  // },

  componentDidMount() {
    var _this = this;
    this.serverRequest = 
      axios
        .get('http://www.qasimzeeshan.com/wp-json/wp/v2/posts/' + this.props.params.id)
        .then(function(result) {    
          _this.setState({
            post: {
              title: result.data.title.rendered,
              content: result.data.content.rendered
            }
          });
        })
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
