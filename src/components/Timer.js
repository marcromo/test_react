import { Component } from "react";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.interval = null;
  }

  componentWillReceiveProps({ active }) {
    if (this.props.active !== active) {
      if (active) {
        this.interval = setInterval(() => {
          this.setState({ counter: this.state.counter + 1 });
        }, 1000);
      } else {
        clearInterval(this.interval);
      }
    }
  }

  componentDidMount() {
    if (this.props.active) {
      this.interval = setInterval(() => {
        this.setState({ counter: this.state.counter + 1 });
      }, 1000);
    } else {
      clearInterval(this.interval);
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <div>{this.state.counter}</div>;
  }
}

export default Timer;
