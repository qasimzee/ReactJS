import {EventEmitter} from "events";
import dispatcher from "../dispatcher.js"

class PostStore extends EventEmitter {
  constructor() {
    super();
    this.posts = [
      {
        id: 220,
        title: "First Blog"
      },
      {
        id: 221,
        title: "Second Blog"
      },
      {
        id: 222,
        title: "Third Blog"
      },
      {
        id: 223,
        title: "Fourth Blog"
      }
    ];
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
    }
  }
}

const postStore = new PostStore;

dispatcher.register(postStore.handleActions.bind(postStore));

export default postStore;
