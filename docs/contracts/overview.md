---
title: Sifi Contracts
---

Sifi is deployed as a single smart contract with a number of functions to support a variety of exchanges and bridges. The functions range from the laser focused and gas efficient to the flexible.

## Use-cases

- Integrating Sifi swaps in a smart contract
- Composing custom swaps from a dapp

The functions can broadly be separated in two categories:

## Protocol specific functions

For very common tasks, Sifi implements protocol specific functions. These functions are laser focused and execute with minimal gas usage.

### Exchanges

- [Uniswap](./protocols/uniswap), including forks like Sushiswap
- [Curve Finance](./protocols/curve)

### Bridges

- [Stargate](./protocols/stargate)

## The Warp Link

Using the Warp Link, users can perform any combination of splits, swaps, and chain jumps in a single transaction.

See the [Warp Link](./warp-link) documentation for more information.
