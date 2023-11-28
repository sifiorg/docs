---
title: Sifi Common Fields/Conventions
---

Many of the swap and bridge functions, including the [Warp Link](./facets/warp-link.md) and [Stateless](./facets/stateless.md)
use parameters with common fields. This page describes those fields.

## Fields

- `tokenIn`: The input token, or zero address for native
- `tokenOut`: The output/settlement token, or zero address for native
- `recipient`: Address where `tokenOut` will be sent
- `amountIn`: Amount of input tokens user will send. For the native token, `msg.value` must equal `amountIn`
- `amountOut`: Amount of tokens the user was quoted/is expecting
- `slippageBps`: How much less `amountOut` the user is willing to accept in BPs. 1 = 0.01%, 10 = 0.10%
- `partner`: The address of the partner, or the zero address for no partner
- `feeBps`: The fee to charge for this swap in BPs, or zero. 1 = 0.01%, 10 = 0.10%
- `deadline`: The tx will revert if `deadline` is in the past

## The partner address

When `partner` is specified, any fee charged for the swap/bridge is split between the protocol and `partner`. Any
positive slippage not delivered to the user is also split between the protocl and the partner.

If a `feeBps` is specified but no `partner` is specified, the entire fee benefits the protocol.

Any valid Ethereum address can be specified as the partner. The partner can claim its fees using functions on
the [StarVault facet](./facets/star-vault)

## The native token

The native token (ETH for Ethereum, AVAX for Avalanche, etc), is represented with the zero address (0x00..)

## FooMethod vs FooMethodPermit

Sifi supports the Permit2 standard, which allows the caller to pass a permit instead of an approval. This allows
users to approve the Permit2 contract once and use permit signatures for all future calls.

- The `FooMethod` uses classic ERC-20 allowance. The caller must approve the Sifi contract to spend
`amountIn` of `tokenIn` before the call.
- The `FooMethodPermit` method uses Permit2. The caller must approve the [Permit2](https://docs.uniswap.org/contracts/v3/reference/deployments)
contract and construct a permit allowing the Sifi contract to spend `amountIn` of `tokenIn`.

When `tokenIn` is the native token (zero address), permits cannot be used.
