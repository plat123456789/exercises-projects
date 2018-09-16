import * as React from "react";
import { Route } from "react-router-dom";
import Posts from "./posts";
import Sidebar from "./sidebar";
import Users from "./users";

// export interface IDashboardProps {
//   match: any;
// }

// export interface DashboardState {

// }

class Dashboard extends React.Component {
  public render() {
    return (
      <div>
        <h1>Admin Dashboard</h1>
        <Sidebar />
        <Route path="/admin/users" component={Users} />
        <Route path="/admin/posts" component={Posts} />
      </div>
    );
  }
}

export default Dashboard;
