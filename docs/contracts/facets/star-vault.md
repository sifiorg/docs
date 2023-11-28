---
title: Star Vault
---

The Star Vault facet is used by partners to look up accrued fees and to withdraw.

```solidity
function partnerTokenBalance(address partner, address token) external view returns (uint256);

function partnerWithdraw(address token) external;
```

Note that the zero address is used for the native token.
