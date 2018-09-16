import * as React from "react";

interface ICountersProps {
  counters: ICounter[];
  totalCounters: number;
}

interface ICounter {
  id: number;
  value: number;
}

class Navbar extends React.Component<ICountersProps> {
  public render() {
    const { totalCounters } = this.props;

    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar{" "}
          <span className="badge badge-pill badge-secondary">
            {totalCounters}
          </span>
        </a>
      </nav>
    );
  }
}

export default Navbar;
