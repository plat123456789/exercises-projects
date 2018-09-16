import * as queryString from "query-string";
import * as React from "react";

// export interface IPostsProps {
//   match: any;
//   location: any;
// }

// export interface PostsState {

// }

class Posts extends React.Component {
  public aaa = queryString.parse(location.search);

  public render() {
    console.log(this.aaa);

    return (
      <div>
        <h1>Posts</h1>
        Year: , Month:
      </div>
    );
  }
}

export default Posts;
