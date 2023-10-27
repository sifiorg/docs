---
title: Curve Finance
---

The following functions are optimized to swap on Curve using as little gas as possible.

## swapExactTokensForTokens

```solidity
  struct ExactInputSingleParams {
    uint256 amountIn;
    uint256 amountOut;
    address recipient;
    address pool;
    uint16 feeBps;
    uint16 slippageBps;
    address partner;
    address tokenIn;
    address tokenOut;
    uint48 deadline;
    uint8 tokenIndexIn;
    uint8 tokenIndexOut;
    uint8 kind;
    bool underlying;
  }

  function curveExactInputSingle(
    ExactInputSingleParams memory params,
    PermitParams calldata permit
  ) external payable returns (uint256 amountOut);
```
