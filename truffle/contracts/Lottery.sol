pragma solidity ^0.5.0;

contract Lottery {
    address payable from;
    address payable to;

    constructor() public {
        from = msg.sender;
    }
}