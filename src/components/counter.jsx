import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tages: ["tag1", "tag2", "tag3"],
  };
  renderTags() {
    if (this.state.tages.length === 0) return <p>There is no tags</p>;
    return (
      <ul>
        {this.state.tages.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
  style = {
    fontSize: 30,
    fontWeight: "bold",
  };
  render() {
    return (
      <div>
        <span style={this.style} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button className="btn btn-secondary btn-sm">Increment</button>
        {this.renderTags()}
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 text-bg-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
