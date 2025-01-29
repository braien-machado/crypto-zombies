// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

contract MockCryptoKitties {
  function getKitty(uint256 _id) external pure returns (
    bool isGestating,
    bool isReady,
    uint256 cooldownIndex,
    uint256 nextActionAt,
    uint256 siringWithId,
    uint256 birthTime,
    uint256 matronId,
    uint256 sireId,
    uint256 generation,
    uint256 genes
  ) {
    isGestating = false;
    isReady = false;
    cooldownIndex = 0;
    nextActionAt = 0;
    siringWithId = 0;
    birthTime = 0;
    matronId = 0;
    sireId = 0;
    generation = 0;
    genes = _id;
  }
}
