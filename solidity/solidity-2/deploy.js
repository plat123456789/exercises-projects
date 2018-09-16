const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const {
  interface,
  bytecode
} = require("./compile");

const accountMnemonic =
  "north boy virus bench citizen brisk lucky fork release purse gallery nasty";
const networkLink =
  "https://rinkeby.infura.io/v3/bb4d095401314e4481020a9ac59e4dce";

const provider = new HDWalletProvider(accountMnemonic, networkLink);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log("Attemping deploy with " + accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({
      data: "0x" + bytecode
    })
    .send({
      from: accounts[0],
      gasPrice: "50000000",
      gasLimit: "1000000"
    });

  console.log(interface);
  console.log("Contraact deployed to", result.options.address);
};

deploy();