import * as React from "react";

const Search = (props: any) => {
  const handleChange = (event: any) => {
    return props.keywords(event);
  };
  return (
    <div className="search_container">
      <h2> Search your Artist</h2>
      <input type="text" onChange={handleChange} />
    </div>
  );
};

export default Search;
