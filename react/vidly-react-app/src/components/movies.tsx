import * as _ from "lodash";
import * as React from "react";
import { toast } from "react-toastify";
import { IGenre, IMovie, ISortColumn } from "../modules";
import { getGenres } from "../services/genreService";
import { deleteMovie, getMovies } from "../services/movieService";
import { paginate } from "../utils/paginate";
import ListGroup from "./common/listGroup";
import Pagination from "./common/pagination";
import MoviesTable from "./moviesTable";
import SearchBox from "./searchBox";

interface IMoviesProps {
  liked: boolean;
  onClick: () => void;
}

interface IMoviesStates {
  movies: IMovie[];
  currentPage: number;
  pageSize: number;
  genres: IGenre[];
  selectedGenre: IGenre | null;
  searchQuery: string;
  sortColumn: ISortColumn;
}

class Movies extends React.Component<IMoviesProps, IMoviesStates> {
  constructor(props: IMoviesProps) {
    super(props);
    this.state = {
      currentPage: 1,
      genres: [],
      movies: [],
      pageSize: 4,
      searchQuery: "",
      selectedGenre: null,
      sortColumn: { path: "title", order: "asc" }
    };
  }

  public async componentDidMount() {
    const { data } = await getGenres();
    const { data: movies } = await getMovies();

    const genres = [{ name: "All Genres", _id: "aaa" }, ...data];

    this.setState({ movies, genres });
  }

  public render() {
    const { length: count } = this.state.movies;

    const {
      pageSize,
      currentPage,
      genres,
      selectedGenre,
      searchQuery,
      sortColumn
    } = this.state;

    if (count === 0) {
      return <p>There are no movies in the database.</p>;
    }

    const { totalCount, data: movies } = this.getPagedData();

    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={genres}
            selectedItem={selectedGenre}
            onItemSelect={this.handleGenreSelect}
          />
        </div>
        <div className="col">
          <p>Showing {totalCount} movies in the database.</p>
          <SearchBox value={searchQuery} onChange={this.handleSearch} />
          <MoviesTable
            movies={movies}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
            sortColumn={sortColumn}
          />
          <Pagination
            itemCount={totalCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }

  private getPagedData() {
    const {
      pageSize,
      currentPage,
      movies: allMovies,
      selectedGenre,
      searchQuery,
      sortColumn
    } = this.state;

    let filtered = allMovies;
    if (searchQuery) {
      filtered = allMovies.filter(m =>
        m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    } else if (selectedGenre && selectedGenre._id !== "aaa") {
      filtered = allMovies.filter(m => m.genre._id === selectedGenre._id);
    }

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const movies = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: movies };
  }

  private handleDelete = async (movie: IMovie) => {
    const originalMovies = this.state.movies;

    const movies = originalMovies.filter(m => m._id !== movie._id);
    this.setState({ movies });
    try {
      await deleteMovie(movie._id);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        toast.error("this movie has already been deleted.");

        this.setState({ movies: originalMovies });
      }
    }
  };

  private handleLike = (movie: IMovie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  private handlePageChange = (page: number) => {
    this.setState({ currentPage: page });
  };

  private handleGenreSelect = (genre: IGenre) => {
    this.setState({ selectedGenre: genre, searchQuery: "", currentPage: 1 });
  };

  private handleSort = (sortColumn: ISortColumn) => {
    this.setState({ sortColumn });
  };

  private handleSearch = (query: any) => {
    this.setState({
      currentPage: 1,
      searchQuery: query,
      selectedGenre: null
    });
  };
}

export default Movies;
