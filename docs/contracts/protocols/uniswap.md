---
title: Uniswap
---

The following functions are optimized to swap on Uniswap V2 and Uniswap V3.

## Uniswap V2 (official pools)

### uniswapV2ExactInputSingle

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

```

### uniswapV2ExactInput

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
```

## Uniswap V2 and compatible (Sushiswap, etc)

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
```

### uniswapV2LikeExactInput

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
```

## Uniswap V3 and compatible (Sushiswap, etc)

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
```

### uniswapV3LikeExactInput

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
