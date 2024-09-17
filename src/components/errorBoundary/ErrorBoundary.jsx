import { Component } from "react";
import ErorrMessage from "../errorMessage/ErorrMessage";

class ErrorBoundary extends Component {
  state = {
    error: false,
  };

  // static getDerivedStateFormError(error) {
  //   return { error: true };
  // }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
    this.setState({
      error: true,
    });
  }

  render() {
    if (this.state.error) {
      return <ErorrMessage />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
