import * as React from "react";
import { Link } from "react-router-dom";

const Artistlist = (props: any) => {
  return (
    <div className="artist_container">
      {props.artists && props.artists.length > 0
        ? props.artists.map((item: any) => (
            <Link
              to={`/artist/${item.id}`}
              key={item.id}
              className="artist_item"
            >
              <div
                className="cover"
                style={{
                  background: `url(/images/${item.cover})`
                }}
              >
                <div>{item.name}</div>
              </div>
            </Link>
          ))
        : null}
    </div>
  );
};

export default Artistlist;
