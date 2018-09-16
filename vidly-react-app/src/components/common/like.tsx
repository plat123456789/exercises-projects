import * as React from "react";

// Input: liked: bollean
// Output: onClick event

interface ILikeProps {
  liked: boolean;
  onClick: () => void;
}

// export interface ILikeState {}

class Like extends React.Component<ILikeProps> {
  public render() {
    const { liked, onClick } = this.props;

    let classes = "clickable fa fa-heart";
    if (!liked) {
      classes += "-o";
    }
    return <i onClick={onClick} className={classes} aria-hidden="true" />;
  }
}

export default Like;
