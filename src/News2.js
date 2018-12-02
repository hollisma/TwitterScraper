import React from "react";

class News2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pizza: "sdfd"
    };
  }

  componentDidMount() {
    fetch("http://localhost:5000/jerry")
      .then(x => {
        return x.text();
      })
      .then(x => {
        this.setState({
          pizza: x
        });
      });
  }

  render() {
    return <div>{this.state.pizza}</div>;
  }
}

export default News2;
