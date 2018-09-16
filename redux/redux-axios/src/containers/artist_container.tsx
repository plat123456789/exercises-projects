import * as React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { artistDetail } from "../actions";

interface IArtistContainer {
  artistDetail: (id: any) => void;
  [key: string]: any;
}

class ArtistContainer extends React.Component<IArtistContainer> {
  public componentWillMount() {
    this.props.artistDetail(this.props.match.params.id);
  }

  public render() {
    console.log(this.props);
    return <div>{this.artistTemplate(this.props)}</div>;
  }

  private artistTemplate = (data: any) =>
    data.artists ? (
      <div className="artist_view">
        <div
          className="artist_background"
          style={{
            background: `url(/images/${data.artists[0].cover})`
          }}
        >
          <Link to="/">Back home</Link>
          <div className="name">{data.artists[0].name}</div>
        </div>
        <div className="artist_description">
          <p>{data.artists[0].bio}</p>
          <div className="tags">
            <div>
              <strong>Style:</strong> {data.artists[0].style}
            </div>
          </div>
        </div>
        <div className="artist_album_list">
          {data.artists[0].albums
            ? data.artists[0].albums.map((item: any) => (
                <div key={item.cover} className="albums">
                  <div
                    className="cover"
                    style={{
                      background: `url(/images/albums/${item.cover})`
                    }}
                  />
                </div>
              ))
            : null}
        </div>
      </div>
    ) : null;
}

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({ artistDetail }, dispatch);
};

const mapStateToProps = (state: any) => {
  return {
    artists: state.artists.artistData
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtistContainer);
