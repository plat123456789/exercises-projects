import * as React from "react";

import ArtistContainer from "../containers/artist_container";

// export interface ArtistProps {}

const Artist: React.SFC = (props: any) => {
  return <ArtistContainer {...props} />;
};

export default Artist;
