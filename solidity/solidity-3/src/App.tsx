import * as React from "react";
import "./App.css";
import lottery from "./lottery";
import web3 from "./web3";
// import web3 from "./web3";

interface IAppState {
  manager: string;
  players: string[];
  balance: string;
  value: string;
  message: string;
}

class App extends React.Component<any, IAppState> {
  constructor(props: any) {
    super(props);

    this.state = {
      balance: "",
      manager: "",
      message: "",
      players: [],
      value: ""
    };
  }

  public async componentDidMount() {
    const manager = await lottery.methods.manager().call();
    const players = await lottery.methods.getPlayers().call();
    const balance = await web3.eth.getBalance(lottery.options.address);

    this.setState({ manager, players, balance });
  }
  public render() {
    return (
      <div>
        <h2>
          Lottery Contract{" "}
          <p>
            This contract is managed by {this.state.manager}. There are
            currently {this.state.players.length} people entered, competing to
            win {web3.utils.fromWei(this.state.balance, "ether")} ether!
          </p>
          <hr />
          <form onSubmit={this.onSubmit}>
            <h4>Want to try your luck?</h4>
            <div>
              <label>Amount of ether to enter</label>
              <input value={this.state.value} onChange={this.handleChange} />
            </div>
            <button>Enter</button>
          </form>
          <hr />
          <h4>Ready to pick a winner?</h4>
          <button onClick={this.onClick}>Pick a winner!</button>
          <hr />
          <h1>{this.state.message}</h1>
        </h2>
      </div>
    );
  }
  private handleChange = (event: any) => {
    this.setState({ value: event.target.value });
  };

  private onSubmit = async (event: any) => {
    event.preventDefault();

    const accounts = await web3.eth.getAccounts();

    this.setState({ message: "Waiting on transaction success..." });

    await lottery.methods.enter().send({
      from: accounts[0],
      value: web3.utils.toWei(this.state.value, "ether")
    });
    this.setState({ message: "You have been entered!" });
  };

  private onClick = async () => {
    const accounts = await web3.eth.getAccounts();

    this.setState({
      message: "Waiting on transaction success..."
    });

    await lottery.methods.pickWinner().send({
      from: accounts[0]
    });

    this.setState({
      message: "A winner has been picked!"
    });
  };
}

export default App;
