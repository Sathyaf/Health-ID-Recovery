// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract HealthIDRecovery {
    mapping(address => string) private shares;

    function storeShare(string memory encryptedShare) public {
        shares[msg.sender] = encryptedShare;
    }

    function recoverShare() public view returns (string memory) {
        return shares[msg.sender];
    }
}
