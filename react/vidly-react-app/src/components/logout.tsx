import * as React from "react";
import auth from "../services/authService";

// export interface LogoutProps {

// }

// export interface LogoutState {

// }

class Logout extends React.Component {
  public componentDidMount() {
    auth.logout();

    window.location.href = "/";
  }

  public render() {
    return null;
  }
}

export default Logout;
