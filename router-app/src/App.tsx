import * as React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/admin/dashboard";
import Home from "./components/home";
import NavBar from "./components/navbar";
import NotFound from "./components/notFound";
import Posts from "./components/posts";
import ProductDetails from "./components/productDetails";
import Products from "./components/products";

class App extends React.Component {
  public render() {
    return (
      <div>
        <NavBar />
        <div className="content">
          <Switch>
            <Route path="/products/:id" component={ProductDetails} />
            <Route path="/products" render={this.addAdditionProps} />
            <Route path="/posts/:year/:month" component={Posts} />
            <Route path="/admin" component={Dashboard} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/" exact={true} component={Home} />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </div>
    );
  }

  private addAdditionProps(props: any) {
    return <Products sortBy="newest" {...props} />;
  }
}

export default App;
