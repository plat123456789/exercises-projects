import React, { Component } from "react";
import CountDown from "./components/countdown";

class App extends Component {
  render() {
    return <CountDown remainingSecond={5} onComplete={() => alert("Done")} />;
  }
}

export default App;
