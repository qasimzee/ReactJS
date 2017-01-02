import dispatcher from "../dispatcher"
var axios = require('axios');

export function loadPost(id) {

  dispatcher.dispatch({type: "FETCH_POST"});
  axios.get('http://www.qasimzeeshan.com/wp-json/wp/v2/posts/' + id).then(function(data) {
    dispatcher.dispatch({type: "RECEIVE_POST", post: data});
  });
  
}