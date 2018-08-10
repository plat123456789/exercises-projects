// import axios from "axios";
import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { artistList, artistListAll } from "../actions/index";
import Artistlist from "../components/artistlist";
import Search from "../components/search";

interface IHomeContainerProps {
  artistListAll: () => void;
  artists: any;
  artistList: (keywords: any) => void;
}

class HomeContainer extends React.Component<IHomeContainerProps> {
  public componentWillMount() {
    this.props.artistListAll();
  }

  public render() {
    console.log(this.props);
    return (
      <div>
        <Search keywords={this.getKeywords} />
        <Artistlist artists={this.props.artists} />
      </div>
    );
  }

  private getKeywords = (event: any) => {
    const key = event.target.value;

    this.props.artistList(key);
  };
}

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({ artistListAll, artistList }, dispatch);
};

const mapStateToProps = (state: any) => {
  return {
    artists: state.artists.artistList
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);
