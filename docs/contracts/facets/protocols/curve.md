---
title: Curve Finance
---

The following functions are optimized to swap on Curve using as little gas as possible.

## curveExactInputSingle

Swap exactly `amountIn` of `tokenIn` for `tokenOut` on Curve using `pool`.

For determining which `kind` number to use, see the [interface source-code](https://github.com/sifiorg/sifi/blob/master/packages/hardhat/contracts/interfaces/external/ICurvePool.sol).
To use underlying swap, set `underlying` to `true`.

The token indexes are determined by the order of the tokens in the pool. For example, if the pool is `DAI/USDC/USDT`,
then `tokenIndexIn` for `DAI` is `0`, `tokenIndexIn` for `USDC` is `1`, and `tokenIndexIn` for `USDT` is `2`.

See [Conventions](../../conventions) for common fields.

See [Curve docs](https://docs.curve.fi/) for more on these fields.

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

function curveExactInputSinglePermit(
  ExactInputSingleParams memory params,
  PermitParams calldata permit
) external payable returns (uint256 amountOut);
```
