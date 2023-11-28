# Facets

The functions of the Sifi contract can be divided in a few categories. These range from the laser focused and gas
efficient protocol specific functions like `uniswapV2ExactInputSingle` or `stargateJumpToken` to the extremely
flexible `warpLinkEngage`.

## Flexible facets

These functions use more gas, but can provide more flexibility. They are useful for composing custom swaps or bridges
or interacting with untrusted contracts.

- [Warp Link](./warp-link): The Warp Link is a flexible function that allows the caller to perform any combination of
  splits, swaps, and chain jumps in a single transaction.
- [Stateless](./stateless): Stateless functions are used to interact with untrusted contracts.

## Protocol specific facets

For very common tasks, Sifi implements protocol specific functions. These functions are laser focused and execute
with minimal gas usage.

### Exchanges

- [Uniswap](./protocols/uniswap), including forks like Sushiswap
- [Curve Finance](./protocols/curve)

### Bridges

- [Stargate](./protocols/stargate)
