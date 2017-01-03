import {EventEmitter} from "events";
import dispatcher from "../dispatcher.js"

class PostStore extends EventEmitter {
  constructor() {
    super();
    this.posts = [];
    this.currentpost = {
      title: "",
      body: ""
    };
  }

  getCurrentPost() {
    return this.currentpost;
  }

  getAll() {
    return this.posts;
  }

  handleActions(actions) {
    switch (actions.type) {
      case "RECEIVE_POST": {
        this.currentpost.title = actions.post.data.title.rendered;
        this.currentpost.content = actions.post.data.content.rendered;
        this.emit("change");
      }
      case "RECEIVE_POSTS": {
        this.posts = actions.posts.data;
        this.emit("change");
      }
    }
  }
}

const postStore = new PostStore;

dispatcher.register(postStore.handleActions.bind(postStore));

export default postStore;
