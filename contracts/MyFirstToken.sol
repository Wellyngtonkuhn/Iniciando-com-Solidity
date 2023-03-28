// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyFirstToken is ERC20, ERC20Burnable, Ownable {

  uint amoutStartMint = 1000 * 10 ** decimals();
  string coinName = "MyFirstToken";
  string coinSymbol = "MFT";
  address walletMarketing = address(0xa6Ef3d0A7BD72A98A97a8aA49d4453edDC05285F);
  address walletOwner = msg.sender;

    constructor() ERC20(coinName, coinSymbol) {
        _mint(walletMarketing, amoutStartMint);
        _mint(walletOwner, amoutStartMint);
    }

    function mint(address _to, uint256 _amount) public onlyOwner {
        _mint(_to, _amount);
    }
}