import "bootstrap/dist/css/bootstrap.css";
import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import logger from "./services/logService";

logger.init();

ReactDOM.render(<App />, document.getElementById("root") as HTMLElement);
registerServiceWorker();
