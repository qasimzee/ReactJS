import {EventEmitter} from "events";

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
    }
  }

  getAll () {
    return this.posts;
  }

  getPost(id) {
     $.ajax({
        url: 'http://www.qasimzeeshan.com/wp-json/wp/v2/posts/' + id,
        dataType: "json",
        success: function (data) {
          this.currentpost = 
        },
        error: function (xhr, status, err) {
            console.error(status, err.toString());
        }
    });
  }
}

const postStore = new PostStore;

export default postStore;