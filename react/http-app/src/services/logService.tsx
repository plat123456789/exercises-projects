import * as Raven from "raven-js";

function init() {
  Raven.config("https://0352927581184428be89e98cc188911a@sentry.io/1264825", {
    release: "0-1-0",

    environment: "development-test"
  }).install();
}

function log(error: any) {
  Raven.captureException(error);
}

export default {
  init,
  log
};
