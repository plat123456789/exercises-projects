pragma solidity ^0.4.17;


contract Lottery {
    address public manager;
    address[] public players;

    constructor()public{
        manager = msg.sender;
    }

    function enter() public payable{
        require(msg.value > .01 ether, "play money, bitch!");

        players.push(msg.sender);
    }

    function random() private view returns (uint){
        return uint(keccak256(abi.encodePacked(block.difficulty, players,now)));
    }

    function pickWinner() public restricted{

        uint index = random() % players.length;
        players[index].transfer(address(this).balance);
        players = new address[](0);
    }

    modifier restricted(){
        require(msg.sender == manager, "fuck off, bitch!");
        _;
    }

    function getPlayers() public view returns (address[]){
        return players;
    }
}