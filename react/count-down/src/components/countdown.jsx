import React, { Component } from "react";

class CountDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sec: this.props.remainingSecond,
      intervalId: ""
    };
  }

  componentDidMount() {
    const intervalId = setInterval(this.timer, 1000);
    this.setState({ intervalId: intervalId });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  render() {
    return <div>{this.formatTime(this.state.sec)}</div>;
  }

  formatTime(totalSeconds) {
    const hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    return (
      ("0" + hours).slice(-2) +
      ":" +
      ("0" + minutes).slice(-2) +
      ":" +
      ("0" + seconds).slice(-2)
    );
  }

  timer = () => {
    let newCount = this.state.sec - 1;
    if (newCount >= 0) {
      this.setState({ sec: newCount });
    } else {
      this.props.onComplete();
      clearInterval(this.state.intervalId);
    }
  };
}

export default CountDown;
