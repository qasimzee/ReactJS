import React from "react"
import Body from "./Body"

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "Blogging website"
    }
    
  }
  changeText(text) {
    this.setState({text});
  }
  render() {
    return (
      <div>
        <h1>Logo</h1>
        <Body text={this.state.text} changeText={this.changeText.bind(this)}/>
      </div>      
    );
  }
}
