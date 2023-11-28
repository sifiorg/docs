---
title: Stateless
---

The Stateless facet is used to perform swaps with untrusted contracts. An intermediary contract called the EnergyShield
is used to protect the user from sending too many tokens or receiving too few when interacting with untrusted contracts.

Source code: [IStateless.sol](https://github.com/sifiorg/sifi/blob/master/packages/hardhat/contracts/interfaces/IStateless.sol)
/ [Stateless.sol](https://github.com/sifiorg/sifi/blob/master/packages/hardhat/contracts/facets/Stateless.sol)

Using `warpStatelessSingle`/`warpStatelessMulti`, if `tokenIn` is the zero address, `amountIn` must be set to `msg.value`.
For any other `tokenIn` value, the caller must first approve the Sifi Diamond an allowance of `amountIn` for `tokenIn`.

Using `warpStatelessSinglePermit`/`warpStatelessMultiPermit`, the caller passes a permit allowing the Sifi Diamond to
spend `amountIn` of `tokenIn`.


## warpStatelessSingle

Perform a single external call to `target` with `data` as the calldata. Any `value` passed to this called will be
passed to the target.

The caller may combine the `push` and `delivers` flags to control how tokens are transferred to and from the target
to support a variety of use cases. For example, `push=true` and `delivers=false` can be used to swap with a router
that expects tokens to be moved to a pool before the call, but does not support specifying the recipient.


```solidity
struct SingleParams {
  uint256 amountIn;
  uint256 amountOut;
  address recipient;
  uint16 slippageBps;
  uint16 feeBps;
  address partner;
  address tokenIn;
  address tokenOut;
  uint48 deadline;
  address target;
  bytes data;
  /**
    * When true, tokens will be transferred to the target before the call.
    * When false, tokens will be transferred to the energy shield before the call.
    */
  bool push;
  /**
    *
    * When true, the target is expected to deliver the tokens directly to `msg.sender`
    * When false, the target is expected to deliver the tokens to the energy shield
    */
  bool delivers;
}

function warpStatelessSingle(
  SingleParams calldata params
) external payable returns (uint256 amountOut);

function warpStatelessSinglePermit(
  SingleParams calldata params,
  PermitParams calldata permit
) external returns (uint256 amountOut);
```

## warpStatelessMulti

Perform multiple calls to the targets specified in `targets` with the calldata specified in `data`. Because the
calldatas are combined in a single `bytes` field, `offsets` specify the start of each calldata in the `data` field
excluding the first.

As an example, with the two targets `[0x01, 0x02]` with calldatas `[0xdead, 0xbeef]`, the `data` field would be
`0xdeadbeef` and the `offsets` field would be `[0x02]` because the length of the first calldata item is 2 bytes.

Any `msg.value` is passed along in the call to the  **first target**.

```solidity
struct MultiParams {
  uint256 amountIn;
  uint256 amountOut;
  address recipient;
  uint16 slippageBps;
  uint16 feeBps;
  address partner;
  address tokenIn;
  address tokenOut;
  uint48 deadline;
  address[] targets;
  bytes data;
  /**
    * The offsets in data for each target excluding the first, which would be 0
    */
  uint256[] offsets;
  /**
    * When true, tokens will be transferred to the first target before the first call.
    * When false, tokens will be transferred to the energy shield before the first call.
    */
  bool push;
  /**
    *
    * When true, the target is expected to deliver the tokens directly to `msg.sender`
    * When false, the target is expected to deliver the tokens to the energy shield
    */
  bool delivers;
}

function warpStatelessMulti(
  MultiParams calldata params
) external payable returns (uint256 amountOut);

function warpStatelessMultiPermit(
  MultiParams calldata params,
  PermitParams calldata permit
) external returns (uint256 amountOut);
```
