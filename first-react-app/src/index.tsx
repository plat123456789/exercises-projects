import "bootstrap/dist/css/bootstrap.css";
import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

const fake = (counterId: number) => {
  return;
};
const fake2 = (counter: { id: 1; value: 2 }) => {
  return;
};
const fake3 = () => {
  return;
};

ReactDOM.render(
  <App
    counters={[{ id: 1, value: 0 }]}
    onDelete={fake}
    onIncrement={fake2}
    onDecrement={fake2}
    onReset={fake3}
    totalCounters={233}
  />,
  document.getElementById("root") as HTMLElement
);

registerServiceWorker();
