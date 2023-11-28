---
title: Protocols Overview
---

The majority of DEX swaps happen on a few protocols. Sifi supports the most popular protocols by having diamond
facets specifically targetting them. These facets are optimized to use as little gas as possible.

A user wanting to swap WETH for DAI on Curve can use the [Warp Link](../warp-link.md) or [Stateless](../stateless.md),
but would save gas by using the specific [Curve](./curve.md) facet.

Similarly, a user looking to bridge USDC from Ethereum to Arbitrum can use the [Warp Link](../warp-link.md),
but can use the specific [Stargate](./stargate.md) facet to save gas.
