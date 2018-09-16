import * as React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import config from "./config.json";
import http from "./services/httpService";

interface IAppState {
  posts: any[];
}

class App extends React.Component<any, IAppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      posts: []
    };
  }

  public async componentDidMount() {
    const { data: posts } = await http.get(config.apiEndpoint);

    this.setState({ posts });
  }

  public render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <button className="btn btn-primary" onClick={this.handleAdd}>
          Add
        </button>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((post: any) => (
              <tr key={post.id}>
                <td>{post.title}</td>
                <td>
                  <button
                    className="btn btn-info btn-sm"
                    onClick={this.handleUpdate.bind(this, post)}
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={this.handleDelete.bind(this, post)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }

  private handleAdd = async () => {
    const obj = { title: "a", body: "b" };
    const { data: post } = await http.post(config.apiEndpoint, obj);

    const posts = [post, ...this.state.posts];
    this.setState({ posts });
  };

  private handleUpdate = async (post: any) => {
    post.title = "UPDATED";
    await http.put(`${config.apiEndpoint}/${post.id}`, post);

    const posts = [...this.state.posts];
    const index = posts.indexOf(posts);
    posts[index] = { ...post };
    this.setState({ posts });
  };

  private handleDelete = async (post: any) => {
    const originalPosts = this.state.posts;

    const posts = this.state.posts.filter(p => p.id !== post.id);

    this.setState({ posts });

    try {
      await http.delete(`w${config.apiEndpoint}/${post.id}`);
    } catch (err) {
      if (err.response && err.response.status === 404) {
        alert("This post has already been deleted.");
      }

      this.setState({ posts: originalPosts });
    }
  };
}

export default App;
