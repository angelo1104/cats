import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    console.log("It works.")
  }

  render() {
    if (this.hasError) {
      return <h1>That is unexpected.</h1>;
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
