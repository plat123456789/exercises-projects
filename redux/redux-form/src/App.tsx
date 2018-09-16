import * as React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getMessages } from "./actions";

interface IAppProps {
  dispatch: (fucntion: any) => {};
  messages: any;
}

class App extends React.Component<IAppProps> {
  public componentWillMount() {
    this.props.dispatch(getMessages());
  }

  public renderList = ({ list }: any) => {
    if (list) {
      return list.map((item: any) => {
        return (
          <div key={item.id} className="item-list">
            <div className="title">{item.title}</div>
            <div className="sender">
              Message from:
              <span>{item.from}</span>
            </div>
            <div className="body">{item.message}</div>
          </div>
        );
      });
    }
  };

  public render() {
    return (
      <div className="App">
        <div className="top">
          <h3>Messages</h3>
          <Link to="/form">Add</Link>
        </div>
        <div className="messages_container">
          {this.renderList(this.props.messages)}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state: any) {
  return {
    messages: state.messages
  };
}

export default connect(mapStateToProps)(App);
