//SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract LoomsManager {
  struct Loom {
    string name;
    address water;
  }
  
  uint private _loomCount;
  mapping(uint => Loom) private _looms;

  function createLoom(string calldata name) public {
    _loomCount += 1;
    _looms[_loomCount] = Loom(
      name,
      msg.sender
    );
  }

  function getLoomCount() public view returns(uint) {
    return _loomCount;
  }

  function getLoomDetails(uint loomId) public view returns(Loom memory) {
    return _looms[loomId];
  }
}