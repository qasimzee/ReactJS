import React from "react"

export default class Post extends React.Component {
  
  render() {
    return (
      <div>
        <h1>Blog post detail</h1>
        <article>
          <p>This is new blogpost number {this.props.params.id}</p>
        </article>
      </div>      
    );
  }
}