import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { directorsList, moviesList } from "../actions";
import "../App.css";
import MovieList from "../components/moviesList";

interface IAppProps {
  directorsList: () => void;
  moviesList: () => void;

  data: any;
}

class App extends React.Component<IAppProps> {
  public componentWillMount() {
    this.props.directorsList();
    this.props.moviesList();
  }

  public render() {
    return (
      <div>
        <MovieList {...this.props} />
      </div>
    );
  }

  //   private renderMovies = (movies: any) =>
  //     movies
  //       ? movies.map((item: any) => <div key={item.name}>{item.name}</div>)
  //       : null;
}

const mapStateToProps = (state: any) => {
  return {
    data: state.movies
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators(
    {
      directorsList,
      moviesList
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
