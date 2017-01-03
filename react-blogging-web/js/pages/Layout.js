import React from "react"
import {Link} from "react-router"

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "Blogging website"
    };
    
  }
  changeText(text) {
    this.setState({text});
  }
  render() {
    return (
      <div>
      {this.props.children}
      </div>      
    );
  }
}
