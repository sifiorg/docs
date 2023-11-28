---
title: Stargate
---

The following functions are optimized to bridge with Stargate using as little gas as possible.

See [Conventions](../../conventions) for common fields.

See the [Stargate Docs](https://stargateprotocol.gitbook.io/stargate/) for chain and pool identifiers.

## stargateJumpNative

Bridge exactly `amountIn` of of the native token using Stargate.

```solidity
struct JumpNativeParams {
  /**
    * The amount in is passed to distinguish the amount to bridge from the fee
    */
  uint160 amountIn;
  /**
    * The amount the user was quoted. Used to calculate the minimum acceptable
    * amount of tokens to receive.
    */
  uint160 amountOutExpected;
  address recipient;
  uint16 slippageBps;
  uint16 feeBps;
  uint48 deadline;
  address partner;
  uint16 dstChainId;
  uint8 srcPoolId;
  uint8 dstPoolId;
}

function stargateJumpNative(JumpNativeParams calldata params) external payable;
```

### stargateJumpToken

Bridge exactly `amountIn` of `token` using Stargate.

```solidity
struct JumpTokenParams {
  address token;
  uint160 amountIn;
  /**
    * The amount the user was quoted. Used to calculate the minimum acceptable
    * amount of tokens to receive.
    */
  uint160 amountOutExpected;
  address recipient;
  uint16 slippageBps;
  uint16 feeBps;
  uint48 deadline;
  address partner;
  uint16 dstChainId;
  uint8 srcPoolId;
  uint8 dstPoolId;
}

function stargateJumpToken(
  JumpTokenParams calldata params,
  PermitParams calldata permit
) external payable;

function stargateJumpTokenPermit(
  JumpTokenParams calldata params,
  PermitParams calldata permit
) external payable;
```
