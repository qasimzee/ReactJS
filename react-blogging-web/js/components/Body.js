import React from "react"

export default class Body extends React.Component {
  handleChange(e) {
    const text = e.target.value;
    this.props.changeText(text);
  }
  render() {
    return (
      <div>
        <div>{this.props.text}</div>
        <input onChange={this.handleChange.bind(this)} />
      </div>
      
    );
  }
}
