import React from "react"
import {Link} from "react-router"

export default class Posts extends React.Component {
  
  render() {
    return (
      <div>
        <h1>Home</h1>
        <article>
          <h1 class="title"><Link to="post/1">Challenge: 20 Euler problems in 100 days</Link></h1>
          <h1 class="title"><Link to="post/2">Challenge: 20 Euler problems in 100 days</Link></h1>
          <h1 class="title"><Link to="post/3">Challenge: 20 Euler problems in 100 days</Link></h1>
          <h1 class="title"><Link to="post/4">Challenge: 20 Euler problems in 100 days</Link></h1>
          <h1 class="title"><Link to="post/5">Challenge: 20 Euler problems in 100 days</Link></h1>
        </article>
      </div>      
    );
  }
}
