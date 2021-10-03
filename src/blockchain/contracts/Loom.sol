//SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "hardhat/console.sol";

contract Loom {
  address private _water;
  address[2] private _earth;
  address[4] private _air;
  address[8] private _fire;

  function getWater() public view returns(address) {
    return _water;
  }

  function getEarth() public view returns(address[2] memory) {
    return _earth;
  }

  function getAir() public view returns(address[4] memory) {
    return _air;
  }

  function getFire() public view returns(address[8] memory) {
    return _fire;
  }

  function join() public returns(bool) {
    if(_water == address(0)) {
      _water = msg.sender;
      return true;
    } else if(_earth[0] == address(0)) {
      _earth[0] = msg.sender;
      return true;
    } else if(_earth[1] == address(0)) {
      _earth[1] = msg.sender;
      return true;
    } else if(_air[0] == address(0)) {
      _air[0] = msg.sender;
      return true;
    } else if(_air[1] == address(0)) {
      _air[1] = msg.sender;
      return true;
    } else if(_air[2] == address(0)) {
      _air[2] = msg.sender;
      return true;
    } else if(_air[3] == address(0)) {
      _air[3] = msg.sender;
      return true;
    } else if(_fire[0] == address(0)) {
      _fire[0] = msg.sender;
      return true;
    } else if(_fire[1] == address(0)) {
      _fire[1] = msg.sender;
      return true;
    } else if(_fire[2] == address(0)) {
      _fire[2] = msg.sender;
      return true;
    } else if(_fire[3] == address(0)) {
      _fire[3] = msg.sender;
      return true;
    } else if(_fire[4] == address(0)) {
      _fire[4] = msg.sender;
      return true;
    } else if(_fire[5] == address(0)) {
      _fire[5] = msg.sender;
      return true;
    } else if(_fire[6] == address(0)) {
      _fire[6] = msg.sender;
      return true;
    } else if(_fire[7] == address(0)) {
      _fire[7] = msg.sender;
      return true;
    } else {
      return false;
    }
  }
}