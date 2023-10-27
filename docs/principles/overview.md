---
title: Sifi Overview
---

Sifi is a service for swapping tokens across chains.

## Splitting orders

Swapping directly on an exchange like Uniswap, Sushiswap, or Curve rarely gives you the best price. It's difficult for a human to calculate that you should do 38% on Uniswap through two pools and the remaining 62% on Curve. The larger the swap, the more compolex it becomes to get the best price.

Sifi takes this much further by allowing orders to be split up, bridged to other chains, and then swapped on other exchanges. These advanced orders become so complex that they would be difficult to perform manually.

## The Warp Link

Here's where things get _Sifi_. The Warp Link is a feature of Sifi that allows users to perform any combination of splits, swaps, and jumps in a single transaction.

### Example: DAI on Ethereum to WBTC on Arbitrum

Say you're looking to start provide liquidity in GMX' WBTC pool. Startig with 5,000 DAI, the best price to perform this _warp_ may be:

#### On Ethereum:

- Sell 3,000 DAI for USDC on Curve
- Sell 2,000 DAI for USDT on Uniswap V3
- Swap the USDT for USDC on Uniswap V2
- Bridge the USDC to Arbitrum using Stargate
- Wait for the bridge to confirm

#### On Arbitrum:

- Swap the USDC for ETH on Uniswap V2
- Swap the ETH for WBTC on Curve

You would need to sign a total of **10** transactions in your wallet; 4 token approvals and 6 swap/bridge transactions, assuming you can approve Uniswap V3 using a signature.

With Sifi this is **1** single transaction. Our Warp Link smart contract is handles your swap like it's going down an assembly line. You give it a list of instructions and it executes them in order, even across chains.
