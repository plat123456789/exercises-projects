import * as React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Customers from "./components/customers";
import LoginForm from "./components/loginForm";
import Logout from "./components/logout";
import MovieForm from "./components/movieForm";
import Movies from "./components/movies";
import NavBar from "./components/navbar";
import NotFound from "./components/notFound";
import RegisterForm from "./components/registerForm";
import Rentals from "./components/rentals";
import auth from "./services/authService";

interface IAppState {
  [key: string]: any;
}

class App extends React.Component<any, IAppState> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  public componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }

  public render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <NavBar user={this.state.user} />
        <main className="container">
          <Switch>
            <Route path="/movies/:id" component={MovieForm} />
            <Route path="/movies" component={Movies} />
            <Route path="/login" component={LoginForm} />
            <Route path="/logout" component={Logout} />
            <Route path="/register" component={RegisterForm} />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact={true} to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}
export default App;
