---
title: Uniswap
---

The following functions are optimized to swap on Uniswap V2 and Uniswap V3.

## Uniswap V2 (official pools)

### uniswapV2ExactInputSingle

Swap exactly `amountIn` of `tokenIn` for `tokenOut` on Uniswap V2. This functions is optimized for the
official Uniswap V2 pools.

```solidity
struct ExactInputSingleParams {
  uint256 amountIn;
  uint256 amountOut;
  address recipient;
  uint16 slippage;
  uint16 feeBps;
  uint48 deadline;
  address partner;
  address tokenIn;
  address tokenOut;
}

function uniswapV2ExactInputSingle(
  ExactInputSingleParams memory params,
  PermitParams calldata permit
) external payable returns (uint256 amountOut);


function uniswapV2ExactInputSinglePermit(
  ExactInputSingleParams calldata params,
  PermitParams calldata permit
) external returns (uint256 amountOut);
```

### uniswapV2ExactInput

Swap exactly `amountIn` of the token `path[0]` for the token `path[path.length - 1]` on Uniswap V2 by going through
the pools in `path`.

```solidity
struct ExactInputParams {
  uint256 amountIn;
  uint256 amountOut;
  address recipient;
  uint16 slippage;
  uint16 feeBps;
  uint48 deadline;
  address partner;
  address[] path;
}

function uniswapV2ExactInput(
  ExactInputParams memory params,
  PermitParams calldata permit
) external payable returns (uint256 amountOut);

function uniswapV2ExactInputPermit(
  ExactInputParams calldata params,
  PermitParams calldata permit
) external returns (uint256 amountOut);
```

## Uniswap V2 and compatible (Sushiswap, etc)

Swap exactly `amountIn` of `tokenIn` for `tokenOut` using the specified Uniswap V2-compatible `pool`, such
as Sushiswap.

### uniswapV2LikeExactInputSingle

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
  uint16 poolFeeBps;
  uint48 deadline;
}

function uniswapV2LikeExactInputSingle(
  ExactInputSingleParams memory params,
  PermitParams calldata permit
) external payable returns (uint256 amountOut);

function uniswapV2LikeExactInputSinglePermit(
  ExactInputSingleParams memory params,
  PermitParams calldata permit
) external returns (uint256 amountOut);
```

### uniswapV2LikeExactInput

Swap exactly `amountIn` of the token `tokens[0]` for the token `tokens[tokens.length - 1]` using the Uniswap V2-compatible
pools in `pools`. The length of `pools` must be one less than the length of `tokens`.

The array `poolFeesBps` specifies the pool fee for each pool in `pools`. The length of `poolFeesBps` must be the same
as the length of `pools`.

```solidity
struct ExactInputParams {
  uint256 amountIn;
  uint256 amountOut;
  uint16[] poolFeesBps;
  address recipient;
  uint16 slippageBps;
  uint16 feeBps;
  uint48 deadline;
  address partner;
  address[] tokens;
  address[] pools;
}

function uniswapV2LikeExactInput(
  ExactInputParams memory params,
  PermitParams calldata permit
) external payable returns (uint256 amountOut);

function uniswapV2LikeExactInputPermit(
  ExactInputParams memory params,
  PermitParams calldata permit
) external returns (uint256 amountOut);
```

## Uniswap V3 and compatible (Sushiswap, etc)

Swap exactly `amountIn` of `tokenIn` for `tokenOut` using the specified Uniswap V3-compatible `pool`.

### uniswapV3LikeExactInputSingle

```solidity
struct ExactInputSingleParams {
  address recipient;
  address partner;
  uint16 feeBps;
  uint16 slippageBps;
  uint256 amountIn;
  uint48 deadline;
  address tokenIn;
  address tokenOut;
  uint256 amountOut;
  address pool;
}

function uniswapV3LikeExactInputSingle(
  ExactInputSingleParams memory params,
  PermitParams calldata permit
) external payable returns (uint256 amountOut);

function uniswapV3LikeExactInputSinglePermit(
  ExactInputSingleParams calldata params,
  PermitParams calldata permit
) external returns (uint256 amountOut);

```

### uniswapV3LikeExactInput

Swap exactly `amountIn` of the token `tokens[0]` for the token `tokens[tokens.length - 1]` using the Uniswap V3-compatible
`pools`. The length of `pools` must be one less than the length of `tokens`.

```solidity
struct ExactInputParams {
  uint256 amountIn;
  uint256 amountOut;
  address recipient;
  uint16 slippageBps;
  uint16 feeBps;
  uint48 deadline;
  address partner;
  address[] tokens;
  address[] pools;
}

function uniswapV3LikeExactInput(
  ExactInputParams memory params,
  PermitParams calldata permit
) external payable returns (uint256 amountOut);
```
