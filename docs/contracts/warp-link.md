---
title: Warp Link
---

The Warp Link is a streaming swap instruction processor that enables advanced swaps, including cross-chain.

## warpLinkEngage

```solidity
struct Params {
  address partner;
  uint16 feeBps;
  /**
    * How much below `amountOut` the user will accept
    */
  uint16 slippageBps;
  address recipient;
  address tokenIn;
  address tokenOut;
  uint256 amountIn;
  /**
    * The amount the user was quoted
    */
  uint256 amountOut;
  uint48 deadline;
  bytes commands;
}

function warpLinkEngage(Params memory params, PermitParams calldata permit) external payable;
```

For how to compile the commands, see the [stream processor](https://github.com/sifiorg/sifi/blob/master/packages/hardhat/contracts/facets/WarpLink.sol).
