import * as React from "react";
import { Link } from "react-router-dom";

// export interface NavBarProps {

// }

// export interface NavBarState {

// }

class NavBar extends React.Component {
  public render() {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/posts/2018/06">Posts</Link>
        </li>
        <li>
          <Link to="/admin">Admin</Link>
        </li>
      </ul>
    );
  }
}

export default NavBar;
