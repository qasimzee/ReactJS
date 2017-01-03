import dispatcher from "../dispatcher"
var axios = require('axios');

var baseUrl = "http://www.qasimzeeshan.com/wp-json/wp/v2/posts/";

export function loadPost(id) {
  dispatcher.dispatch({type: "FETCH_POST"});
  axios.get(baseUrl + id).then(function(data) {
    dispatcher.dispatch({type: "RECEIVE_POST", post: data});
  })
  .catch(function (error) {
    console.log(error);
  });
  
}

export function loadPosts() {
  dispatcher.dispatch({type: "FETCH_POSTS"});
  axios.get(baseUrl, {params: {fields: "title,id"} })
  .then(function(data) {
    dispatcher.dispatch({type: "RECEIVE_POSTS", posts: data});
  })
  .catch(function (error) {
    console.log(error);
  }); 
}