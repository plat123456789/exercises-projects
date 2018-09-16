import * as React from "react";

// export interface SearchBoxProps {

// }

const SearchBox = ({ value, onChange }: any) => {
  return (
    <input
      type="text"
      name="query"
      className="form-control my-3"
      placeholder="search..."
      value={value}
      // tslint:disable-next-line:jsx-no-lambda
      onChange={e => onChange(e.currentTarget.value)}
    />
  );
};

export default SearchBox;
