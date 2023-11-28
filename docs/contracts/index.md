---
title: Sifi Contracts
---

Sifi is a router for dexes and bridges. It allows the caller to use many different protocols; from the Uniswap DEX
to the Stargate bridge, with a familiar interface.

## Use-cases

Users can use Sifi to enhance their own dapps, or to build entirely new dapps.

- Integrating Sifi swaps or bridging in a smart contract
- Composing custom swaps from a dapp

## Diamond

The Sifi contract is deployed as a single contract by implementing the [ERC-2535: Diamonds, Multi-Facet Proxy](https://eips.ethereum.org/EIPS/eip-2535)
standard. Functions on the Sifi Diamond are grouped into diamond [facets](./facets).

## Upgradeability

Once stabilized, the contract may be frozen to prevent further upgrades.
