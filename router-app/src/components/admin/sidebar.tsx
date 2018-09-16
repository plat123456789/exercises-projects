import * as React from "react";
import { Link } from "react-router-dom";

// export interface SidebarProps {}

class Sidebar extends React.Component {
  public render() {
    return (
      <ul>
        <li>
          <Link to="/admin/posts">Posts</Link>
        </li>
        <li>
          <Link to="/admin/users">Users</Link>
        </li>
      </ul>
    );
  }
}

export default Sidebar;
