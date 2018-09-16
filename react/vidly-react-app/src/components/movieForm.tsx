import * as React from "react";

export interface IMovieFormProps {
  match: any;
  history: any;
}

// export interface MovieFormState {

// }

class MovieForm extends React.Component<IMovieFormProps> {
  public render() {
    const { match } = this.props;

    return (
      <div>
        <h1>Movie Form {match.params.id}</h1>
        <button className="btn btn-primary" onClick={this.handleSave}>
          Save
        </button>
      </div>
    );
  }
  private handleSave = () => {
    this.props.history.push("/movies");
  };
}

export default MovieForm;
