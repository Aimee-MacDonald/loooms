//SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract LoomsManager {
  uint256 private _loomCount;

  function createLoom() public {
    _loomCount += 1;
  }

  function getLoomCount() public view returns(uint256) {
    return _loomCount;
  }
}