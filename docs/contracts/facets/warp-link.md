---
title: Warp Link
---

The Warp Link is a streaming swap instruction processor that enables advanced swaps, such as splitting up the
route.

### Commands

The `commands` field is a stream of instructions that are processed in order:

```
[command length][command 0][command 0 args][command 1][command 1 args]...
```

The simplest `commands field` is:

- `0x01`: There is 1 command
- `0x01`: The first command is wrap (to WETH)

Because the wrap command (`0x01`) has no args, the `commands` stream ends here.

A slightly more advanced command is:

- `0x01`: There is 1 command
- `0x04`: The first command is split
- `0x02`: There are two parts to the split
  - `0x1388`: The first split takes 50% of the input amount (0x1388 = 5,000 bps = 50%)
  - `0x01`: The first split has 1 command
  - `0x01`: The first command of the first split is wrap (to WETH)
  - `0x01`: There second split has 1 command (it implicitly takes the remaining 50%)
  - `0x02`: The first command of the second split is wrap (to WETH)

These two examples perform the first function, which is to simply wrap the input token to WETH. The second example
splits the operation in two as a demo. A more practical use of the split command is to divide a swap across multiple
pools to reduce price impact.

## warpLinkEngage

```solidity
struct Params {
  address partner;
  uint16 feeBps;
  /**
    * How much below `amountOut` the user will accept
    */
  uint16 slippageBps;
  address recipient;
  address tokenIn;
  address tokenOut;
  uint256 amountIn;
  /**
    * The amount the user was quoted
    */
  uint256 amountOut;
  uint48 deadline;
  bytes commands;
}

function warpLinkEngage(Params memory params, PermitParams calldata permit) external payable;

function warpLinkEngagePermit(
  Params calldata params,
  PermitParams calldata permit
) external payable;
```

For the command types and arguments of each command, see the [source-code](https://github.com/sifiorg/sifi/blob/master/packages/hardhat/contracts/facets/WarpLink.sol).
